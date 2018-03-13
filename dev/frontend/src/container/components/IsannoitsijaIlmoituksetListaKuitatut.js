import React from 'react';

export default class EtuSivu extends React.Component
{
	render()
	{
		return (
			<tr>
				<td onclick="datahaku.naytaIlmoituksenTiedotIsannoitsija(5);"><a href="index.html">Naapuri juhliii</a></td>
				<td>01.2.2018 00:30</td>
				<td colspan="3">Pekka Töpöhäntä</td>
				<td colspan="3">Häiriöilmoitus</td>
				<td>Kuitattu 02.02.2018 09:15 - Isännöitsijä Jonne</td>
		    </tr>
		);
	}
}
