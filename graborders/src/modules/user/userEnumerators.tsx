import Roles from "src/security/roles";

const userEnumerators = {
  status: ["active", "empty-permissions"],
  genre: ["male", "female"],
  wallet: ["USDT","ETH", "BTC"],
  roles: Object.keys(Roles.values),
};

export default userEnumerators;
