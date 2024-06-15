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

export default function UserRegisterationButton() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [name, setName] = useState("");
 

  
 


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
