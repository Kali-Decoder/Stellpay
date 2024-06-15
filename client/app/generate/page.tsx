"use client";

import {
  Card,
  CardHeader,
  Input,
  Button,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
type Props = {};

function Generate({}: Props) {
  const [type, setType] = useState(1);
  const [countMembers, setCountMembers] = useState(0);
  return (
    <div className="container flex justify-center items-center h-[100vh]">
      <Toaster />

      <Card className="w-1/3 p-3">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Stell-Pay</p>
            <p className="text-small text-default-500">
              Generate your Payment Link
            </p>
          </div>
        </CardHeader>

        <CardBody>
          <Input
            autoFocus
            label="Enter Amount"
            placeholder="Amount in USD"
            variant="bordered"
            type="number"
          />

          {type === 2 && (
            <>
              <div className="flex gap-2 items-center mt-4">
                <Button
                  variant="ghost"
                  color="warning"
                  onClick={() => {
                    if(countMembers > 0) setCountMembers(countMembers-1);
                  }}
                >
                  −
                </Button>
                <p>Members {countMembers}</p>
                <Button
                  variant="ghost"
                  color="warning"
                  onClick={() => setCountMembers(countMembers+1)}
                >
                  ＋
                </Button>
              </div>
              {Array.from({ length: countMembers }).map((_, i) => (
                <Input
                  autoFocus
                  label={`Enter Member ${i + 1} Wallet Address`}
                  placeholder={`Address of Member ${i + 1}`}
                  variant="bordered"
                  type="number"
                  className="mt-3"
                />
              ))}
             
            </>
          )}
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
        </CardBody>

        <CardFooter className="mt-6">
          <Button variant="ghost" color="warning" isLoading={false}>
            Generate Link
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Generate;
