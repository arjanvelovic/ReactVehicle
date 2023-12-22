import { useState } from "react";

const token = '682b0fadb5b82904c2f815d804124fe781eb14fdf620d41f'
const finalFormEndpoint = `https://vehicle-z65p.onrender.com/api/vehiclesapi`;

function createServer() {
  const [status, setStatus] = useState('');

  const POSTData = (e:any) => {
    e.preventDefault();
    setStatus('loading');
    
    const data = Array.from(e.target.elements)
      .filter((input:any) => input.name)
      .reduce((obj:any, input:any) => Object.assign(obj, { [input.name]: input.value }), {});

    fetch(finalFormEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'x-access-token': `Bearer ${token}`},
      body: JSON.stringify(data),})
      
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);}
        return response.json();
      })
      .then(() => {
        setStatus('success');
      })
      .catch(() => {
        setStatus('error');
      });
  };
  return {POSTData, status};
}

export default createServer;