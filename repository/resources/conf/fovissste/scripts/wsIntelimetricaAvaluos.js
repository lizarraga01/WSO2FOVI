function InSeQuence(mc){
	var xmlpayload = mc.getPayloadXML();
	var bodymessage = xmlpayload..*::AVALUO.toString();
	var newPayload =  <urn:createAvaluoXML xmlns:urn="urn:AvaluoService"><avaluo xsi:type="xsd:string" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">{bodymessage}</avaluo>
      </urn:createAvaluoXML>;
	mc.setPayloadXML(newPayload);
}