import moment from "moment";
import React, { useEffect, useCallback } from "react";
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import useGetHistory from "../Hooks/useGetHistory";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

export default function HistoryAccordion({id}) {
    const { data: historyData, fetchAllHistory, loading: isLoadingHistory } = useGetHistory();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const getTheHistories = useCallback(() => {
        fetchAllHistory(id);
    });

    useEffect(() => {
        getTheHistories();
    }, []);

    return <div>
        {
            historyData.length? historyData.reverse().map((h, index) => {
                if (index > 7) return;
                return <Accordion key={index} expanded={expanded === `panel${index + 1}`} onChange={handleChange(`panel${index + 1}`)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index + 1}bh-content`}
                        id={`panel${index + 1}bh-header`}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {h.changed_by && h.changed_by.username} Edited:
                        </Typography>
                        <div>
                            <Typography sx={{ color: 'text.secondary' }}>{h.type}</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>{moment(h.createdAt).fromNow()}</Typography>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails>
                        {
                            h.changes && h.changes.map((change, index) => {
                                return <Typography key={index} variant="subtitle2">
                                    {change.message}
                                </Typography>
                            })
                        }
                    </AccordionDetails>
                </Accordion>
            }): 
            <Typography>No History yet</Typography>
        }
    </div>
}