import React from "react";
import { useNavigate } from "react-router-dom";
import { getWalletAddress } from "../../components/metamaskLogin";
import "./styles.scss";
const ConnectWallet = () => {
    const navigate = useNavigate();
    const onButtonClick = async () => {
        try {
            const address = await getWalletAddress();
            navigate("/app/" + address);
        } catch (err) {
            console.log("Something went wrong");
        }
    };

    return (
        <div className="connect-wallet-container">
            <h2 className="fb">MemeDao - Welcome to Memeverse</h2>
            <p className="fr">Lets get you onboarded quick and smooth</p>
            <div className="button-container" onClick={onButtonClick}>
                <p className="fb">Connect Wallet</p>
            </div>
        </div>
    );
};

export default ConnectWallet;
