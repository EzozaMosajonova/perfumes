import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'react-i18next';

export default function Questions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
const { t } = useTranslation();
  return (
    <div className='container max-w-[1260px] mx-auto px-4 '>
      <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center mt-20'>{t("question.title")}</h1>
      <p className='text-lg text-gray-400 font-normal mt-3 text-center'>{t("question.desc")}</p>
      <div className='mt-5'>
        <Accordion
          expanded={expanded}
          onChange={handleExpansion}
          slots={{ transition: Fade }}
          slotProps={{ transition: { timeout: 400 } }}
          sx={[
            expanded
              ? {
                [`& .${accordionClasses.region}`]: {
                  height: 'auto',
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'block',
                },
              }
              : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: 'none',
                },
              },
          ]}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography component="span">{t("question.sectionTitle1")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("question.sectionDesc1")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">{t("question.sectionTitle2")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("question.sectionDesc2")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">{t("question.sectionTitle3")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("question.sectionDesc3")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">{t("question.sectionTitle4")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("question.sectionDesc4")}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography  component="span">{t("question.sectionTitle5")}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {t("question.sectionDesc5")}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
