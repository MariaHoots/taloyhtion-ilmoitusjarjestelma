import React from 'react';

export default class EtuSivu extends React.Component
{
	render()
	{
    return (
		 <tr>
			  <td onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(1);"><a href="index.html">Kissa katolla apua</a></td>
			  <td colspan="2">15.2.2018 09:15</td>
			  <td colspan="3">Taavetti Tompainen</td>
			  <td colspan="3">Muu palaute</td>
			  <td><a href="index.html"><img src="img/vastaanotettu.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/tyonalla.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/keskeytynyt.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a> <a href="index.html"><img src="img/valmis.svg" class="img-fluid border border-dark rounded bg-success" alt="[H]" height="20" width="20"/></a>
			  </td>
		</tr>
		);
	}
}
