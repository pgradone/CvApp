// Changes XML to JSON
// ref : https://davidwalsh.name/convert-xml-json#:~:text=If%20you'd%20like%20the,XML%20and%20use%20JSON%20instead.
function xmlToJson(xml) {
  // Create the return object
  let obj = {};

  if (xml.nodeType == 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        let attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType == 3) {
    // text
    obj = xml.nodeValue;
  }

  // do children
  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      let item = xml.childNodes.item(i);
      let nodeName = item.nodeName;
      if (typeof obj[nodeName] == "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof obj[nodeName].push == "undefined") {
          let old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
}

// const euroPassJsonTxt = JSON.stringify(
//   xmlToJson("CV-ESP-Europass-20200620-Gradone-FR.xml")
// );

// function to fill from euroPaddDocument
function fillDataFromeuroPassDocument() {
  const cvId = euroPassDocument[0].LearnerInfo.Identification;
  const idHTML = document.querySelector(".identity");
  idHTML.querySelector(".candidatename h1").textContent =
    cvId.PersonName.FirstName + " " + cvId.PersonName.Surname.toUpperCase();
  const cvContact = cvId.ContactInfo.Address.Contact;
  const addressHTML = idHTML.querySelector(".candidatecard .contact .address");
  addressHTML.querySelector(".line").textContent = cvContact.AddressLine;
  addressHTML.querySelector(".cpcity").textContent =
    cvContact.PostalCode + " " + cvContact.Municipality;
  addressHTML.querySelector(".country").textContent = cvContact.Country.Label;
  const cvTelephones = cvId.ContactInfo.TelephoneList.Telephone;
  const mediaHTML = idHTML.querySelector(".candidatecard .contact .media");
  cvTelephones.forEach((phone) => {
    mediaHTML.insertAdjacentHTML(
      "beforeEnd",
      `<p class="media phone number">${phone.Use.Code}:${phone.Contact}</p>`
    );
  });
  mediaHTML.insertAdjacentHTML(
    "beforeEnd",
    `<p class="media email number">e-mail:${cvId.ContactInfo.Email.Contact}</p>`
  );
  const cvInstantMessaging =
    cvId.ContactInfo.InstantMessagingList.InstantMessaging;
  mediaHTML.insertAdjacentHTML(
    "beforeEnd",
    `<p class="media phone number">${cvInstantMessaging.Use.Label}:${cvInstantMessaging.Contact}</p>`
  );
  const cvHeadline = euroPassDocument[0].LearnerInfo.Headline;
  const objectiveHTML = document.querySelector(".objective");
  objectiveHTML.querySelector(".mission").textContent =
    "Apply the full efficiency of IT to your business";
  objectiveHTML.querySelector(".jobrelated").textContent =
    cvHeadline.Type.Label + " : " + cvHeadline.Description.Label;
  // Work Experience
  const cvWorkExperience =
    euroPassDocument[0].LearnerInfo.WorkExperienceList.WorkExperience;
  const experienceItemHTML = document.querySelector(".experience");
  const cloneItem = experienceItemHTML.querySelector(".item");
  for (const item of cvWorkExperience) {
    const ItemNode = cloneItem.cloneNode(true);
    experienceItemHTML.append(ItemNode);
    const itemFromDate = item.Period.From;
    ItemNode.querySelector(".period .from").textContent =
      itemFromDate["@month"].substr(2, 2) + "-" + itemFromDate["@year"];
    const itemToDate = item.Period.To;
    ItemNode.querySelector(".period .to").textContent =
      itemToDate["@month"].substr(2, 2) + "-" + itemToDate["@year"];
    ItemNode.querySelector(".position").textContent = item.Position.Label;
    ItemNode.querySelector(".employer .name").textContent = item.Employer.Name;
    ItemNode.querySelector(".employer .contact .city").textContent =
      item.Employer.ContactInfo.Address.Contact.Municipality;
    ItemNode.querySelector(".activities").innerHTML = item.Activities;
  }
  cloneItem.remove();
  // Education
  const cvEdu = euroPassDocument[0].LearnerInfo.EducationList.Education;
  const eduItemHTML = document.querySelector(".education");
  const eduCloneItem = eduItemHTML.querySelector(".item");
  for (const item of cvEdu) {
    const ItemNode = eduCloneItem.cloneNode(true);
    eduItemHTML.append(ItemNode);
    const itemFromDate = item.Period.From;
    ItemNode.querySelector(".period .from").textContent =
      itemFromDate["@month"].substr(2, 2) + "-" + itemFromDate["@year"];
    const itemToDate = item.Period.To;
    ItemNode.querySelector(".period .to").textContent =
      itemToDate["@month"].substr(2, 2) + "-" + itemToDate["@year"];
    ItemNode.querySelector(".title").textContent = item.Title;
    ItemNode.querySelector(".organisation .name").textContent =
      item.Organisation.Name;
    ItemNode.querySelector(".organisation .contact .city").textContent =
      item.Organisation.ContactInfo.Address.Contact.Municipality;
    ItemNode.querySelector(".activities").innerHTML = item.Activities;
    // Skills
  }
  eduCloneItem.remove();
}

fillDataFromeuroPassDocument();
