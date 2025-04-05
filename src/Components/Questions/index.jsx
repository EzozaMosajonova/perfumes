import * as React from 'react';
import Accordion, { accordionClasses } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function Questions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div className='container max-w-[1260px] mx-auto px-4 '>
      <h1 className='text-black md:font-extrabold font-bold md:text-5xl text-3xl text-center mt-20'>FREQUENTLY ASKED QUESTIONS</h1>
      <p className='text-lg text-gray-400 font-normal mt-3 text-center'>Learn more about our enchanting fragrances</p>
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
            <Typography component="span">What ingredients are used in our fragrances?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We use a blend of natural and synthetic ingredients. Our fragrances feature essential oils, floral extracts, and carefully crafted synthetic compounds to create unique and lasting scents.
              Each ingredient is chosen for its high quality and ability to evoke specific emotions and memories.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">How do our fragrances evoke emotions?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Each fragrance is crafted to evoke specific emotions.
              We combine top, middle, and base notes to create complex scents that can trigger feelings of relaxation, happiness, nostalgia, and even passion. For example, lavender is known for its calming properties, while citrus notes can uplift and energize.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">What is the inspiration behind our signature scents?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our signature scents are inspired by nature and memories. We draw inspiration from lush gardens, tropical beaches, and serene forests to create fragrances that transport you to your favorite places. Additionally,
              we aim to capture the essence of unforgettable moments, making each scent a unique journey.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography component="span">How can I choose the right fragrance for me?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Choosing the right fragrance is a personal journey. Consider the occasions you will wear it for, your personality, and the emotions you want to evoke. Sampling different scents can help you find one that resonates with you.
              Our experts are always available to provide personalized recommendations based on your preferences.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography  component="span">How long do your fragrances last?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our fragrances are designed to last throughout the day. The longevity of a fragrance depends on its concentration and the individual's skin chemistry. We offer a range of concentrations, from Eau de Toilette to Parfum, to suit your preferences.
              For longer-lasting scent, apply to pulse points and moisturize your skin before application.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
