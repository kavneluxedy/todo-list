import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button } from "react-bootstrap";

const Effect = () => {
  const [username, setUsername] = useState("Username Init");

  useEffect(() => {
    console.log("at rdr : " + username);
  }, [username]);

  const MakeRandStr = (nb) => {
    let result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < nb; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useLayoutEffect(() => { console.log("Use Effect Re Render") } ); // Utilisé pour le nettoyage

  return (
    <>
      <Button className="btn btn-secondary" onClick={() => setUsername(MakeRandStr(5))}><img src="https://img.icons8.com/ios/24/000000/flag--v1.png"></img>&nbsp;Générer une chaîne aléatoire</Button>
      <span> { username } </span>
    </>
  );
};

export default Effect;
