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
		this.ytunnus = "";
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
	
	naytaHenkilonTiedot(kenttaID)
	{
		var i;
		var sisalto = "";
		for (i=1;i<this.kasiteltaviasoluja;i++)
		{
			if (i != kenttaID)
			{
				document.getElementById("isannoitsijaHenkilotHenkilo"+i).style.display = "none";
			}
		}
		
		if (document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display == "none")
		{
			document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display = "table-row";
		}
		else if (document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display == "table-row")
		{
			document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).style.display = "none";
		}
		
		document.getElementById("isannoitsijaHenkilotHenkilotd"+kenttaID).innerHTML = '<h4>Teppo Testaaja</h4><form><div class="form-row"><div class="form-group col-md-3"><label for="formGroupNimi">Nimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.nimi + '"></div><div class="form-group col-md-3"><label for="formGroupNimi">Sukunimi</label><input type="text" class="form-control" id="formGroupNimi" value="' + this.sukunimi + '"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="formGroupOsoite">Osoite</label><input type="text" class="form-control" id="formGroupOsoite" value="' + this.osoite + '"></div></div><div class="form-row"><div class="form-group col-md-2"><label for="formGroupPostinumero">Postinumero</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postinumero + '"></div><div class="form-group col-md-4"><label for="formGroupPostinumero">Postitoimipaikka</label><input type="text" class="form-control" id="formGroupPostinumero" value="' + this.postitoimipaikka + '"></div></div><div class="form-row"><div class="form-group col-md-6"><label for="kayttajaInputEmail1">Sähköposti</label><input type="email" class="form-control" id="kayttajaInputEmail1" aria-describedby="emailHelp" value="' + this.sahkoposti + '"><small id="emailHelp" class="form-text text-muted">Emme tee osoitteellasi mitään laitonta.</small></div></div><button type="submit" class="btn btn-primary">Tallenna</button> <button type="button" class="btn btn-primary">Poista käyttäjä</button></form>';
			
			
			
		
		
		
		
		
		
		
	//	document.getElementById("isannoitsijaHenkilotHenkilo"+kenttaID).childNodes[0].value = "aaa";
		
		
		
		
		
	}
	
	
}