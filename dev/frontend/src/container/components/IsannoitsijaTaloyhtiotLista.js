import React from 'react';

export default class EtuSivu extends React.Component {

	render() {

		let listView = {}

		if (this.props.housingCompList.length === 0) {
			listView = <td colSpan="8"><p>Ei taloyhtiöitä listassa</p></td>
		} else {
			listView = this.props.housingCompList.map((housingComp) =>
				<tr key={housingComp._id}>
				<th scope="row">*</th>
				<td colSpan="3" onClick="datahaku.naytaYhtionTiedot(1);"><a href="index.html">{housingComp.name}</a></td>
				<td colSpan="3">{housingComp.address}, {housingComp.city}</td>
				<td>
					<a href="isannoitsija-henkilot.html"><img src="img/hallitus.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
					<a href="isannoitsija-henkilot.html"><img src="img/henkilot.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
					<a href="isannoitsija-ilmoitukset.html"><img src="img/ilmoitukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
					<a href="asetukset.html"><img src="img/asetukset.svg" className="img-fluid" alt="[H]" height="20" width="20"/></a>
				</td>
				</tr>
			)
		}
		return (
			<tbody>{listView}</tbody>
		);
	}
}
