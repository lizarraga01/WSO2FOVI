function InSequence(mc){
	var payload = mc.getPayloadXML();
	var newPayload = 
	<dat:exec_spAseguradoras xmlns:dat="http://ws.wso2.org/dataservice">
		<dat:Usuario>{payload..*::cUsuario.toString()}</dat:Usuario>
		<dat:cPassword>{payload..*::cpassword.toString()}</dat:cPassword>
		<dat:id_aseguradora>{payload..*::nIdAseguradora.toString()}</dat:id_aseguradora>
		<dat:id_solicitud>{payload..*::cNumeroCredito.toString()}</dat:id_solicitud>
		<dat:cuv>{payload..*::cCUV.toString()}</dat:cuv>
		<dat:fecha_pago>{payload..*::fFechaPago.toString()}</dat:fecha_pago>
		<dat:monto_pago>{payload..*::nMontoPago.toString()}</dat:monto_pago>
		<dat:fecha_vigencia>{payload..*::fFechaVigencia.toString()}</dat:fecha_vigencia>
		<dat:certificado>{payload..*::cCertificado.toString()}</dat:certificado>
		<dat:poliza>{payload..*::cPoliza.toString()}</dat:poliza>
		<dat:pagado>{payload..*::nPagado.toString()}</dat:pagado>
		<dat:status_certificado>{payload..*::nEstsCertificado.toString()}</dat:status_certificado>
	</dat:exec_spAseguradoras>	
	mc.setPayloadXML(new XML(newPayload.toXMLString()));                    
}

function OutSequence(mc){
	var payload = mc.getPayloadXML();
	print("Payload que regresa mysql: " + payload);
	/*var salida = payload..*::nested_exception.toString();	

	var respuesta = '';
	if(salida != ''){
		var opciones = salida.replace('java.sql.SQLException:','');
		respuesta += '<recibirResponse><recibirReturn>';
		respuesta += '<![CDATA[<respuesta><resultado>NOK</resultado>';
		respuesta += '<mensaje>Error en la recepción de ofertas - '+opciones+'</mensaje>';
		respuesta += '</respuesta>]]></recibirReturn></recibirResponse>';
		mc.setPayloadXML(new XML(respuesta.toString()));
	}else{
		respuesta += '<recibirResponse><recibirReturn>';
		respuesta += '<![CDATA[<respuesta><resultado>NOK</resultado>'
		respuesta += '<mensaje>'+payload..*::['mensaje'].toString()+'</mensaje></respuesta>]]></recibirReturn></recibirResponse>';
		mc.setPayloadXML(new XML(respuesta.toString()));
	}*/
}