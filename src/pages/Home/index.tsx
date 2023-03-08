import React from "react";

import { Nft } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { getAlchemy } from "../../chain/utils";
import NFTCard from "../../components/NFTCard";
import { collectionAddress } from "../../config";

const HomePage = () => {
  const [nfts, setNFTs] = useState<Nft[]>([]);
  const getNFTList = async () => {
    // NFT collection address
    const omitMetadata = false;
    const nfts = await getAlchemy().nft.getNftsForContract(collectionAddress, {
      omitMetadata: omitMetadata,
    });
    setNFTs(nfts.nfts);
  };

  useEffect(() => {
    getNFTList();
  }, []);

  return (
    <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10 grid grid-cols-4 gap-4">
      {nfts.map((nft) => {
        return (
          <div key={nft.tokenId}>
            <NFTCard data={nft}></NFTCard>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
