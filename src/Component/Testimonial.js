import React,{useState} from 'react';
import { css, cx} from 'emotion';

export default function Testimonial() {
    const quotes = {
        0:{
            client: " Artify Consult",
            quote:" Lorem ipsum dolor sit amet, Lorem Ipsur Dolor sit amet"
        },
        1:{
            client: " Yoangleon Gives",
            quote:"Lorem ipsum dolor sit amet, Lorem Ipsur Dolor sit amet"
        },
        2:{
            client: " TechStart Blooms",
            quote:"Lorem ipsum dolor sit amet, Lorem Ipsur Dolor sit amet"
        },
        3:{
            client: " SDG Limited and Company",
            quote:"Lorem ipsum dolor sit amet, Lorem Ipsur Dolor sit amet"
        }
    }

    const [current,setCurrent] = useState(quotes[0]);
    const [active, setSActive]=useState(0);
    const handleSetClick =(event)=>{
        setCurrent(quotes[event.target.getAttribute('data-quote')])
        setSActive(event.target.getAttribute("data-quote"))
        
    }
    console.log(current);
    return (
        <div className={css `
        display:flex;
        flex-direction:column;
        align-items:center;
        margin:40px auto;
        max-width:700px;

        h2{
        text-align:center;
        margin-bottom:20px;
        color: purple;
        }
        `}>
            <h4>{current.quote}</h4>
            <h4>{current.client}</h4>
            <div className={css `
            display:flex;

            span{
                height:20px;
                width:20px;
                margin:0 3px;
                display: flex;
                align-items:center;
                justify-content:center;
                cursor:pointer;
            }

            span::before {
                content: "";
                height:6px;
                width:6px;
                background-color:var(--mainGreen);
                border-radius:50%;
                transition:background-color 0.3s ease;
            }
            span:hover::before{
                background-color:var(--mainGreen);

            }
            span[data-quote="${active}"]::before{
                background-color: var(--mainPink);
            }
            `}>{Object.keys(quotes).map(index => (
                <span onClick={(event) => handleSetClick(event)} data-quote={index} key={index}/>
            ))}</div>
        </div>
    )
}
