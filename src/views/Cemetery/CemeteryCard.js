import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@material-ui/core';

import TokenSymbol from '../../components/TokenSymbol';

const CemeteryCard = ({ bank }) => {
  return (
    <Grid item xs={12} md={4} lg={4}>
      <Link to={`/cemetery/${bank.identifier}`}>
      {/*<a href={`/dante-finance-gui/cemetery/${bank.contract}`}>*/}
        <Card className='dantePurgatoryCard' variant="outlined">
          <CardContent>
            <Box style={{ position: 'relative' }}>
              <Box
                style={{
                  position: 'absolute',
                  right: '0px',
                  top: '-5px',
                  height: '48px',
                  width: '48px',
                  
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <TokenSymbol size={64} symbol={bank.depositTokenName} />
              </Box>
              <h4 style={{marginBottom: "10px"}}>{bank.depositTokenName}</h4>
              <h5 style={{fontSize: "1em"}}>Deposit: {bank.depositTokenName.toUpperCase()}</h5> 
              <h5 style={{fontSize: "1em"}}>Earn: {bank.earnTokenName}</h5>
              <h5 style={{fontSize: "1em"}}>Fee: {bank.fee}%</h5>
            </Box>
          </CardContent>
        </Card>
        </Link>
      {/*</a>*/}
    </Grid>
  );
};

export default CemeteryCard;
