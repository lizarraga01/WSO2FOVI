function InSequence(mc){
	var payload = mc.getPayloadXML();
	var newXML = payload..*::["xml"].toString();
	newXML = newXML.replace(/<\?(.*?)\?>/,'').replace("\n", "").trim();
	newXML = newXML.replace(/((<([a-zA-Z0-9_\-]*:)?)([a-zA-Z0-9_\-])*(>[ \t\n]*<\/([a-zA-Z0-9_\-]*:)?)([a-zA-Z0-9_\-])*(>))|(<([a-zA-Z0-9_\-]*:)?)([a-zA-Z0-9_\-])*(\/>)/ig, "").trim();

	var newPayload =  <dat:exec_VerificacionSP xmlns:dat="http://ws.wso2.org/dataservice"><dat:xmlVerificacion>{newXML.toString()}</dat:xmlVerificacion></dat:exec_VerificacionSP>
	mc.setPayloadXML(new XML(newPayload.toXMLString()));
}

function OutSequence(mc){
	var payload = mc.getPayloadXML();
	print("Salida de Verificacion -> ", payload);

	var salida = payload..*::nested_exception.toString();	

	var respuesta = '';
	if(salida != ''){
		var opciones = salida.replace('java.sql.SQLException:','');
		respuesta += '<recibirResponse><recibirReturn>';
		respuesta += '<![CDATA[<respuesta><resultado>NOK</resultado>';
		respuesta += '<mensaje>Error en la recepcion de ordenes de verificacion - '+opciones+'</mensaje>';
		respuesta += '</respuesta>]]></recibirReturn></recibirResponse>';
		mc.setPayloadXML(new XML(respuesta.toString()));
	}/*else{
		var actualizado = +payload..*::['actualizado'].toString();	
		respuesta += actualizado;
	}*/
}