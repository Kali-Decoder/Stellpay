"use client";
import {
  ConnectButton,
  TransactionButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { Spinner } from "@nextui-org/spinner";
import { contract } from "@/utils/contracts";
import { prepareContractCall, readContract, resolveMethod } from "thirdweb";
import TOGCard from "@/components/TOGCard";
import { client } from "../client";
import CreateTOGBtn from "@/components/CreateTOGBtn";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
type Props = {};

function Feed({}: Props) {

  
  return (
    <div className="w-full">
      <Toaster />

      <div className="flex w-full items-center justify-between gap-12 px-4 py-2">
        <CreateTOGBtn />
        <div>
          <ConnectButton client={client} />
        </div>
      </div>
     
    </div>
  );
}

export default Feed;
