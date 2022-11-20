import * as React from 'react';
import {Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText,} from '@mui/material';
import {makeStyles} from '@mui/styles';
import CustomerIcon from '@mui/icons-material/PersonAdd';
import {Link} from 'react-router-dom';
import {useQueryWithStore, useTranslate} from 'react-admin';
import {subDays} from 'date-fns';

import CardWithIcon from './CardWithIcon';
import {Customer} from '../types';

const NewCustomers = (props) => {
    const translate = useTranslate();
    const classes = useStyles();
    const {title} = props;
    const aMonthAgo = subDays(new Date(), 30);
    aMonthAgo.setDate(aMonthAgo.getDate() - 30);
    aMonthAgo.setHours(0);
    aMonthAgo.setMinutes(0);
    aMonthAgo.setSeconds(0);
    aMonthAgo.setMilliseconds(0);

    const {loaded, data: visitors} = useQueryWithStore({
        type: 'getList',
        resource: 'customer',
        payload: {
            filter: {
                has_ordered: true,
                first_seen_gte: aMonthAgo.toISOString(),
            },
            sort: {field: 'first_seen', order: 'DESC'},
            pagination: {page: 1, perPage: 100},
        },
    });

    if (!loaded) return null;

    const nb = visitors ? visitors.reduce((nb) => ++nb, 0) : 0;
    return (
        <CardWithIcon
            to="/customers"
            icon={CustomerIcon}
            title={title}
            subtitle={nb}
        >
            <List>
                {visitors
                    ? visitors.map((record) => (
                        <ListItem
                            button
                            to={`/customer/${record.id}`}
                            component={Link}
                            key={record.id}
                        >
                            <ListItemAvatar>
                                <Avatar src={`${record.avatar}?size=32x32`}/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={`${record.first_name} ${record.last_name}`}
                            />
                        </ListItem>
                    ))
                    : null}
            </List>
            <Box flexGrow="1">&nbsp;</Box>
            <Button
                className={classes.link}
                component={Link}
                to="/customer"
                size="small"
                color="primary"
            >
                <Box p={1} className={classes.linkContent}>
                    {props.title}
                </Box>
            </Button>
        </CardWithIcon>
    );
};

const useStyles = makeStyles(theme => ({
    link: {
        borderRadius: 0,
    },
    linkContent: {
        color: theme.palette.primary.main,
    },
}));

export default NewCustomers;
