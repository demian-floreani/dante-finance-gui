import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/crypto_tomb_cash.svg';
import tShareLogo from '../../assets/img/crypto_tomb_share.svg';
import tombLogoPNG from '../../assets/img/crypto_tomb_cash.f2b44ef4.png';
import tShareLogoPNG from '../../assets/img/crypto_tomb_share.bf1a6c52.png';
import tBondLogo from '../../assets/img/crypto_tomb_bond.svg';

import tombFtmLpLogo from '../../assets/img/tomb_ftm_lp.png';
import tshareFtmLpLogo from '../../assets/img/tshare_ftm_lp.png';

import wftmLogo from '../../assets/img/ftm_logo_blue.svg';
import booLogo from '../../assets/img/spooky.png';
import zooLogo from '../../assets/img/zoo_logo.svg';
import shibaLogo from '../../assets/img/shiba_logo.svg';

import danteLogo from '../../assets/img/dante.svg';
import grailLogo from '../../assets/img/grail.svg';
import dbondLogo from '../../assets/img/dbond.svg';
import danteTombLpLogo from '../../assets/img/dante_tomb.svg';
import grailFtmLpLogo from '../../assets/img/grail_ftm.svg';
import danteLogoPNG from '../../assets/img/dante_500x500.png';


const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  TOMBPNG: tombLogoPNG,
  TSHAREPNG: tShareLogoPNG,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  WFTM: wftmLogo,
  //BOO: booLogo,
  //SHIBA: shibaLogo,
  //ZOO: zooLogo,
  'TOMB-FTM-LP': danteTombLpLogo,
  'TSHARE-FTM-LP': grailFtmLpLogo,

  DANTE: danteLogo,
  GRAIL: grailLogo,
  DBOND: dbondLogo,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 100 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
