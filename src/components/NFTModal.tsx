import React from "react";
import { Nft } from "alchemy-sdk";

interface INFTModal {
  data: Nft;
  owners: string[];
  close: Function;
}

const NFTModal = ({ data, owners, close }: INFTModal) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">{data.title}</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => close()}
              >
                <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex flex-col justify-center items-center">
              <img
                className="   object-cover rounded-lg h-100  w-96"
                src={data.media[0]?.raw}
              ></img>
              <div className="flex flex-row justify-between items-center">
                <h5 className="text-2xl font-semibold">Owner Address</h5>
                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                  :{owners}
                </p>
              </div>

              <h3 className="text-3xl font-semibold">Description</h3>

              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                {data.description}
              </p>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => close(false)}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() =>
                  window.open(
                    `https://opensea.io/assets/ethereum/${data.contract.address}/${data.tokenId}`,
                    "_blank",
                    "noreferrer"
                  )
                }
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default NFTModal;
