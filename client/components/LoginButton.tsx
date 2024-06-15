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

export default function UserLoginButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
  const [type, setType] = useState(1);



  return (
    <>
      <Button onPress={onOpen} color="primary">
        Login YourSelf
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-1">
                Login Your{" "}
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
                  label="Enter Password"
                  placeholder="*********"
                  variant="bordered"
                  value={name}
                  type="password"
                />

           
              </ModalBody>
              <ModalFooter className="flex flex-col">
                <div className="mt-4 mb-2 flex justify-between">
                  <p className="text-sm">if You Don't have an Account ?</p>
                  <a className="text-sm text-blue-400">
                    Register
                  </a>
                </div>

                <div className="flex  justify-end gap-2">
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>

                  <Button color="warning" variant="faded">
                    Login
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
