import Accordion from "../components/Accordion";

function AccordionPage() {

    const items = [
        {
            id: 'dsa',
            label: 'cccc',
            content: 'sdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaassdaas'
        },
        {
            id: 'aaa',
            label: 'ddd',
            content: '432423432423432423432423432423432423432423432423432423432423432423432423432423432423432423432423432423'
        },
        {
            id: 'de',
            label: 'eeee',
            content: 'deadea'
        },
    ]

    return <Accordion items={items} />;
    
}

export default AccordionPage;