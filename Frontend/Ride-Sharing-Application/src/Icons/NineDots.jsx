import { createIcon } from "@chakra-ui/icons";

const NineDotsIcon = createIcon({
  displayName: "NineDotsIcon",
  viewBox: "0 0 64 64", // Update the viewBox as needed
  path: (
    <>
      <circle cx="16" cy="16" r="4" fill="white" />
      <circle cx="32" cy="16" r="4" fill="white" />
      <circle cx="48" cy="16" r="4" fill="white" />
      <circle cx="16" cy="32" r="4" fill="white" />
      <circle cx="32" cy="32" r="4" fill="white" />
      <circle cx="48" cy="32" r="4" fill="white" />
      <circle cx="16" cy="48" r="4" fill="white" />
      <circle cx="32" cy="48" r="4" fill="white" />
      <circle cx="48" cy="48" r="4" fill="white" />
    </>
  ),
});

export default NineDotsIcon;