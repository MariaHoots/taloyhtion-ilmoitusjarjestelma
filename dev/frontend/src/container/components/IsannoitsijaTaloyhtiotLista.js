import React from 'react';

export default class EtuSivu extends React.Component
{
	render() 
	{
		return (
			<tr>
				<th scope="row">*</th>
				<td colspan="3" onclick="datahaku.naytaYhtionTiedot(1);"><a href="index.html">As. Oy Avaruusraketti</a></td>
				<td colspan="3">Avaruusrakettikatu 1000, Kuu</td>
				<td><a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" class="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>		
		);
	}
}
