"use client";
import { prepareContractCall, resolveMethod } from "thirdweb";
import { TransactionButton, useSendTransaction } from "thirdweb/react";
import { contract } from "@/utils/contracts";
import toast from "react-hot-toast";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { use, useState } from "react";

export default function CreateTOGBtn() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [type, setType] = useState(1);

  console.log(type);
  const { mutate: sendTransaction, isError } = useSendTransaction();
  const call = async () => {
    const transaction = await prepareContractCall({
      contract,
      method: resolveMethod("createTOG"),
      params: [name, type],
    });
    sendTransaction(transaction);
  };

  console.log(isError);

  return (
    <>
      <Button onPress={onOpen} color="primary">
        Register Yourself
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-1">
                Create Your{" "}
                <span className="text-yellow-500 font-bold uppercase">
                  Stell Pay
                </span>{" "}
                Account
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Enter Username"
                  placeholder="Nikku.Dev"
                  variant="bordered"
                  value={name}
                  type="text"
                />
                <Input
                  autoFocus
                  label="Enter Email"
                  placeholder="nikku876@gmail.com"
                  variant="bordered"
                  value={name}
                  type="email"
                />
                <Input
                  autoFocus
                  label="Enter Phone Number"
                  placeholder="+919079.."
                  variant="bordered"
                  value={name}
                  type="number"
                />
                <Input
                  autoFocus
                  label="Enter Password"
                  placeholder="*********"
                  variant="bordered"
                  value={name}
                  type="password"
                />

                <RadioGroup
                  className="mt-3"
                  label="Generate Payment Type"
                  orientation="horizontal"
                >
                  <Radio
                    onChange={(e) => setType(parseInt(e.target.value))}
                    defaultChecked
                    value="1"
                  >
                    Peer
                  </Radio>
                  <Radio
                    onChange={(e) => setType(parseInt(e.target.value))}
                    value="2"
                  >
                    Organisation
                  </Radio>
                </RadioGroup>
              </ModalBody>
              <ModalFooter className="flex flex-col">
                <div className="mt-4 mb-2 flex justify-between">
                  <p className="text-sm">if You have Already an Account ?</p>
                  <a className="text-sm text-blue-400">
                    Login
                  </a>
                </div>

                <div className="flex  justify-end gap-2">
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>

                  <Button color="warning" variant="faded">
                    Create
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
