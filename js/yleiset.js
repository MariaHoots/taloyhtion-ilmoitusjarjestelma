class dataHaku
{
	
	constructor()
	{
		this.kasiteltaviasoluja = 0;
		this.nimi = "Teppo";
		this.sukunimi = "Testaaja";
		this.osoite = "Avaruusrakettikatu 1000, Kuu";
		this.postinumero = "345343";
		this.postitoimipaikka = "Testaamo";
		this.sahkoposti = "teppo@testaaja.nulll";
		this.ytunnus = "Y-123456567";
		
	}
	maaritaSolujenMaara(maara)
	{
		this.kasiteltaviasoluja = maara;
	}
	haeHenkiloTiedot()
	{
		// TODO
		
	}
	haeYhtioTiedot()
	{
		// TODO
		
	}
	
	talletaHenkilonTiedot()
	{
	

	
	}
	
	
	naytaHenkilonTiedot(kenttaID)
	{
		var sisalto = "";
		var curStyle = ""
		var elem,displayStyle
		
		document.getElementById("isannoitsijaHenkilotHenkilotd"+kenttaID).innerHTML = '<h4>Teppo Testaaja</h4><form><div class="form-row"><div class="form-group col-md-3"><label for="formGroupNimi">Nimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.nimi + '"></div><div class="form-group col-md-3"><label for="formGroupNimi">Sukunimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.sukunimi + '"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="formGroupOsoite">Osoite</label><input type="text" class="form-control" id="formGroupOsoite" value="' + this.osoite + '"></div></div><div class="form-row"><div class="form-group col-md-2"><label for="formGroupPostinumero">Postinumero</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postinumero + '"></div><div class="form-group col-md-4"><label for="formGroupPostinumero">Postitoimipaikka</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postitoimipaikka + '"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="kayttajaInputEmail1">Sähköposti</label><input type="email" class="form-control" id="kayttajaInputEmail1" aria-describedby="emailHelp" value="' + this.sahkoposti + '"><small id="emailHelp" class="form-text text-muted">Emme tee osoitteellasi mitään laitonta.</small></div></div><button type="submit" class="btn btn-primary">Tallenna</button> <button type="button" class="btn btn-primary">Poista käyttäjä</button></form>';
		
		elem = document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID);
		if (elem.currentStyle)
		{
			displayStyle = elem.currentStyle.display;
		}
		else if (window.getComputedStyle)
		{
			curStyle = window.getComputedStyle(elem, null).getPropertyValue("display");
		}
		
		if (curStyle == "none")
		{
			document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display = "table-row";
		}
		else if (curStyle == "table-row")
		{
			document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display = "none";
		}
		
		for (var i=1;i<this.kasiteltaviasoluja;i++)
		{
				if (i != kenttaID)
				{
					document.getElementById("isannoitsijaHenkilotHenkilo"+i).style.display = "none";
				}
		}
	}
	naytaYhtionTiedot(kenttaID)
	{
		var sisalto = "";
		var curStyle = ""
		var elem,displayStyle
		
		document.getElementById("isannoitsijaYhtiotYhtiotd"+kenttaID).innerHTML = '<h4>As. Oy Maailman paras talonyhtiö</h4><form><div class="form-row"><div class="form-group col-md-4"><label for="formGroupNimi">Nimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.nimi + '"></div><div class="form-group col-md-2"><label for="formGroupNimi">Y-tunnus</label><input type="text" class="form-control" id="formGroupYtunnus" value="' + this.ytunnus + '"></div></div><div class="form-row"><div class="form-groupform-group3 col-md-6"><label for="formGroupOsoite">Osoite</label><input type="text" class="form-control" id="formGroupOsoite" value="' + this.osoite + '"></div></div><div class="form-row"><div class="form-group col-md-2"><label for="formGroupPostinumero">Postinumero</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postinumero + '"></div><div class="form-group col-md-4"><label for="formGroupPostinumero">Postitoimipaikka</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this. postitoimipaikka + '"></div></div><button type="submit" class="btn btn-primary">Tallenna</button> <button type="button" class="btn btn-primary">Poista yhtiö</button></form>';
		
		elem = document.getElementById("isannoitsijaYhtiotYhtio"+kenttaID);
		if (elem.currentStyle)
		{
			displayStyle = elem.currentStyle.display;
		}
		else if (window.getComputedStyle)
		{
			curStyle = window.getComputedStyle(elem, null).getPropertyValue("display");
		}
		
		if (curStyle == "none")
		{
			document.getElementById("isannoitsijaYhtiotYhtio"+kenttaID).style.display = "table-row";
		}
		else if (curStyle == "table-row")
		{
			document.getElementById("isannoitsijaYhtiotYhtio"+kenttaID).style.display = "none";
		}
		
		for (var i=1;i<this.kasiteltaviasoluja;i++)
		{
				if (i != kenttaID)
				{
					document.getElementById("isannoitsijaYhtiotYhtio"+i).style.display = "none";
				}
		}
	}
	
	
	
	
}