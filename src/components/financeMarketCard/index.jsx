import React from 'react';
import { Grid } from '@material-ui/core'

export default function FinanceMarketCard() {
    const [finances] = React.useState([
        {title: 'finances', scope: 'finances'},
        {title: 'money', scope: 'money'},
    ]);
    const [currentScope, setCurrentScope] = React.useState('moeny');
    const [scopes] = React.useState({
        'moeny': [
            {
                quoteTitle: '23902',
                quoteValue: '2342',
                quoteChange: '5235',
            }
        ]
    });
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {finances.map(({title}, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>{title}</Item>
                    </Grid>
                ))}
            </Grid>
            
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {scopes[currentScope].map(({title}, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Item>{title}</Item>
                    </Grid>
                ))}
            </Grid>
            <Chart />
        </Box>
    )
}