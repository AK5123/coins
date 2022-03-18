import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const LoginButton = ({ clickListener }) => {
  const connectWallet = async () => {
    let p = await provider.send("eth_requestAccounts", []);
    let address = await signer.getAddress();
    if (clickListener) {
      clickListener(address);
    }
  };
  return (
    <div>
      <button onClick={connectWallet}>Connect wallet</button>
    </div>
  );
};

export default LoginButton;
