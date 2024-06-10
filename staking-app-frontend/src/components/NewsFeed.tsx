import { useQuery } from "@/app/hooks";
import { useEvmContext, useSessionContext } from "./ContextProvider";
import { useEffect } from "react";
import StakeForm from "./StakeForm";

export type Account = {
  id: string;
  name: string;
};
export type Stake = {
  id: string;
  owner: Account;
  amount: number;
  stake_timestamp: number;
  unstake_requested: boolean;
  unstake_request_timestamp: number;
}

export default function NewsFeed() {
  const evmAddress = useEvmContext();
  const session = useSessionContext();
  let seconds_in_a_year = (365 * 24 * 60 * 60);
  const currentTimestamp = Math.floor(Date.now() / 1000);

  const { result: stake } = useQuery<Stake>("get_stake_details", evmAddress ? { user_id: evmAddress } : undefined);

  const requestUnstake = async () => {
    try {
      await session?.call({
        name: "request_unstake",
        args: [],
      })
    } catch (error) {
      console.error(error);
    }
  }
  const processUnstake = async () => {
    try {
      await session?.call({
        name: "process_unstake",
        args: [],
      })
    } catch (error) {
      console.error(error);
    }
  }
  const claimYield = async () => {
    try {
      await session?.call({
        name: "claim_yield",
        args: [],
      })
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

  });
  return (
    <div className="p-4 md:p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{stake?.owner?.name}</h1>

        <div className="flex text-center">
          <div className="bg-white m-1 p-2 rounded-lg shadow">
            <h3 className="text-lg font-semibold">My Stake</h3>
            <p className="text-3xl font-bold">{stake?.amount}</p>
          </div>

          <div className="bg-white m-1 p-2 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Yield</h3>
            <p className="text-3xl font-bold">{stake?.amount ? (stake?.amount * 0.1 * (Date.now() / 1000 - stake?.stake_timestamp / seconds_in_a_year)) : 0}</p>
          </div>
        </div>
      </div>

      {/* News Feed */}
      <div className="bg-white p-4 rounded-lg shadow">
        { !stake?.amount && (
          <StakeForm />
        )}
        { stake?.amount && (
          <>
          {
            stake?.unstake_requested ? (
              <div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded float-right" onClick={() => {
                  // onSubmit(content)
                  processUnstake()
                  console.log("Unstake Submitted")
                  
                }} disabled={stake?.unstake_request_timestamp > currentTimestamp}>
                  Unstake
                </button>
                <p>Unstake Request {stake?.unstake_request_timestamp > currentTimestamp ? 'Pending': 'Approved'}</p>
              </div>
            ) : (
              <div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded float-right" onClick={() => {
                  // onSubmit(content)
                  console.log("Claim Yield Requested")
                  claimYield()
                }}>
                  Claim Yield
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded float-right" onClick={() => {
                  // onSubmit(content)
                  console.log("Unstake Requested")
                  requestUnstake()
                }}>
                  Unstake
                </button>
              </div>
            )

          }
          </>

        )
        }
      </div>
    </div>
  );
  }