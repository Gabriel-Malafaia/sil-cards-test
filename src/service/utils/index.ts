const colors = {
  primary: "blue.300",
  secondary: "blue.900",
  secondary_2: "green.400",
  gray_1: "gray.400",
  gray_2: "gray.500",
  error: "red.100",
  white: "white",
};

function lower(element?: string) {
  if (!element) {
    return;
  }

  return element.toLowerCase();
}

function formatNumber(num: number) {
  return num.toLocaleString("pt-BR");
}

export { colors, lower, formatNumber };
