import React from "react";
import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export const AddTransactionBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="font-semibold text-gray-300 text-base md:text-lg border-b border-gray-300 mb-4 py-1 md:py-2"></h3>
      <Button
        width="100%"
        onClick={() => navigate("/addTransaction")}
        className="mb-4"
        size={"md"}
        colorScheme="blue"
        leftIcon={<AddIcon />}
      >
        Add New Transaction
      </Button>
    </>
  );
};
