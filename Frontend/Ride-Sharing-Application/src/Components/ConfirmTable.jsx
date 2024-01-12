import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { handleStatus } from "../Redux/Rider/actions";
const ConfirmTable = ({ _id, name, phoneNumber, i, driverId, status }) => {
  const [isChecked, setIsChecked] = useState(false);
  const id = String(_id);
  const driver_id=String(driverId)
  const dispatch = useDispatch()
  const toggleColor = () => {
    dispatch(handleStatus(id, { driverId:driver_id, status: true }))
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err.message));
    setIsChecked(!isChecked);
  };
  return (
    <Tr>
      <Td>{i + 1}</Td>
      <Td>{name}</Td>
      <Td>{phoneNumber}</Td>
      <Td cursor={'pointer'} onClick={() => toggleColor()}>
        {isChecked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              stroke="green"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="9" fill="green" fill-opacity="0">
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.2s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </circle>
              <path
                fill="none"
                stroke-dasharray="14"
                stroke-dashoffset="14"
                d="M8 12L11 15L16 10"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.2s"
                  values="14;0"
                />
              </path>
            </g>
          </svg>
        ) : (
          "confirm"
        )}
      </Td>
      {/* <Td isNumeric>{location}</Td> */}
    </Tr>
  );
};

export default ConfirmTable;
