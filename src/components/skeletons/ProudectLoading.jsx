// 'use server'
import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
// import {getProduct} from '@/util/serverActions';
const data = [
    {
        src: '',
        title: '',
        channel: '',
        views: '',
        createdAt: '',
    },
    {
        src: '',
        title: '',
        channel: '',
        views: '',
        createdAt: '',
    },  {
        src: '',
        title: '',
        channel: '',
        views: '',
        createdAt: '',
    },
];

function Media(props) {
    const { loading = false } = props;

    return (
        <Grid container wrap="nowrap">
            {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5}}>
                    {item ? (
                        <Image
                            style={{ width: 410, height: 218 }}
                            alt={item.title}
                            src={item.src}
                        />
                    ) : (
                        <Skeleton variant="rectangular" width={510} height={318} />
                    )}

                    {item ? (
                        <Box sx={{ pr: 2 }}>
                            <Typography gutterBottom variant="body2">
                                {item.title}
                            </Typography>
                            <Typography display="block" variant="caption" color="text.secondary">
                                {item.channel}
                            </Typography>
                            {/* <Typography variant="caption" color="text.secondary">
                                {`${item.views} • ${item.createdAt}`}
                            </Typography> */}
                        </Box>
                    ) : (
                        <Box sx={{ pt: 0.5 }}>
                            <Skeleton />
                            <Skeleton width="100%" />
                        </Box>
                    )}
                </Box>
            ))}
        </Grid>
    );
}

Media.propTypes = {
    loading: PropTypes.bool,
};
export default function ProudectLoading() {
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Media loading />
        </Box>
    );
}
