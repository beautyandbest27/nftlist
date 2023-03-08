import { GetOwnersForNftResponse, Nft } from "alchemy-sdk";
import React, { useEffect } from "react";
import { getAlchemy } from "../chain/utils";
import NFTModal from "./NFTModal";

interface INFTDetail {
  data: Nft;
}

export default function NFTCard({ data }: INFTDetail) {
  const [showModal, setShowModal] = React.useState(false);
  const [owner, setOwner] = React.useState<GetOwnersForNftResponse>({
    owners: [],
  });
  const getOwner = async (): Promise<void> => {
    const owners = await getAlchemy().nft.getOwnersForNft(
      data.contract.address,
      data.tokenId
    );
    setOwner(owners);
  };

  useEffect(() => {
    if (showModal && owner.owners.length == 0) {
      getOwner();
    }
  }, [showModal]);

  return (
    <>
      <div
        className="cursor-pointer max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-200 dark:border-gray-200 dark:hover:bg-gray-300"
        key={data.tokenId}
        onClick={() => setShowModal(true)}
      >
        <h3>{data.title ?? ""}</h3>
        <img
          className="object-cover h-68 w-96 rounded-lg"
          src={data.rawMetadata?.image}
        ></img>
      </div>

      {showModal ? (
        <>
          <NFTModal
            data={data}
            owners={owner.owners}
            close={() => setShowModal(false)}
          ></NFTModal>
        </>
      ) : null}
    </>
  );
}
