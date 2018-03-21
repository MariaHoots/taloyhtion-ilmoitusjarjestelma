import React from 'react';

export default class EtuSivu extends React.Component
{
	render()
	{
		return (
			<tr>
				<th scope="row">*</th>
				<td colSpan="3" onClick="datahaku.naytaYhtionTiedot(1);"><a href="index.html">As. Oy Avaruusraketti</a></td>
				<td colSpan="3">Avaruusrakettikatu 1000, Kuu</td>
				<td><a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a><a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a><a href="asetukset.html"><img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a></td>
		    </tr>
		);
	}
}
