// Changes XML to JSON
// ref : https://davidwalsh.name/convert-xml-json#:~:text=If%20you'd%20like%20the,XML%20and%20use%20JSON%20instead.

// let fs = require('fs');
const url = document.querySelector('#filelist').value;
console.log(url);
// let rawData = parse()
// let euroPassDoc = JSON.parse(url);
// console.log(euroPassDoc);

// function to fill from euroPaddDocument
function fillDataFromeuroPassDocument() {
  const cvId = euroPassDocument01[0].LearnerInfo.Identification;
  const idHTML = document.querySelector('.identity');
  idHTML.querySelector('.namesurname').textContent =
    cvId.PersonName.FirstName + ' ' + cvId.PersonName.Surname.toUpperCase();
  idHTML.querySelector('.candidatecard .photo img').src = cvId.PhotoURL;
  idHTML.querySelector('.candidatetitle').textContent = cvId.Title;
  const cvContact = cvId.ContactInfo.Address.Contact;
  const addressHTML = idHTML.querySelector('.candidatecard .contact .address');
  addressHTML.querySelector('.line').textContent = cvContact.AddressLine;
  addressHTML.querySelector('.cpcity').textContent =
    cvContact.PostalCode + ' ' + cvContact.Municipality;
  addressHTML.querySelector('.country').textContent = cvContact.Country.Label;
  const cvTelephones = cvId.ContactInfo.TelephoneList.Telephone;
  const mediaHTML = idHTML.querySelector('.candidatecard .contact .media');
  cvTelephones.forEach((phone) => {
    mediaHTML.insertAdjacentHTML(
      'beforeEnd',
      `<p class="media phone number">${phone.Use.Code}:${phone.Contact}</p>`
    );
  });
  mediaHTML.insertAdjacentHTML(
    'beforeEnd',
    `<p class="media email number">e-mail:${cvId.ContactInfo.Email.Contact}</p>`
  );
  const cvInstantMessaging =
    cvId.ContactInfo.InstantMessagingList.InstantMessaging;
  mediaHTML.insertAdjacentHTML(
    'beforeEnd',
    `<p class="media phone number">${cvInstantMessaging.Use.Label}:${cvInstantMessaging.Contact}</p>`
  );
  const cvSocialNetworking = cvId.ContactInfo.SocialNetworking;
  cvSocialNetworking.forEach((socialitem) => {
    mediaHTML.insertAdjacentHTML(
      'beforeEnd',
      `<p class="media social"><span>${socialitem.Label}:<a href="${socialitem.url}">${socialitem.url}</a></span></p>`
    );
  });
  const cvHeadline = euroPassDocument01[0].LearnerInfo.Headline;
  const objectiveHTML = document.querySelector('.objective');
  objectiveHTML.querySelector('.jobrelated').textContent =
    cvHeadline.Description.Label;
  // cvHeadline.Type.Label + ' : ' + cvHeadline.Description.Label;
  objectiveHTML.querySelector('.mission').textContent =
    cvHeadline.Description.Mission;
  // Work Experience
  const cvWorkExperience =
    euroPassDocument01[0].LearnerInfo.WorkExperienceList.WorkExperience;
  const experienceItemHTML = document.querySelector('.experience');
  const cloneItem = experienceItemHTML.querySelector('.item');
  for (const item of cvWorkExperience) {
    const ItemNode = cloneItem.cloneNode(true);
    experienceItemHTML.append(ItemNode);
    const itemFromDate = item.Period.From;
    ItemNode.querySelector('.period .from').textContent =
      itemFromDate['@month'].substr(2, 2) + '-' + itemFromDate['@year'];
    const itemToDate = item.Period.To;
    ItemNode.querySelector('.period .to').textContent =
      itemToDate['@month'].substr(2, 2) + '-' + itemToDate['@year'];
    ItemNode.querySelector('.title').textContent = item.Position.Label;
    ItemNode.querySelector('.organisation .name').textContent =
      item.Employer.Name;
    ItemNode.querySelector('.organisation .contact .city').textContent =
      item.Employer.ContactInfo.Address.Contact.Municipality;
    ItemNode.querySelector('.activities').innerHTML = item.Activities;
  }
  cloneItem.remove();
  // Education
  const cvEdu = euroPassDocument01[0].LearnerInfo.EducationList.Education;
  const eduItemHTML = document.querySelector('.education');
  const eduCloneItem = eduItemHTML.querySelector('.item');
  for (const item of cvEdu) {
    const ItemNode = eduCloneItem.cloneNode(true);
    eduItemHTML.append(ItemNode);
    const itemFromDate = item.Period.From;
    ItemNode.querySelector('.period .from').textContent =
      itemFromDate['@month'].substr(2, 2) + '-' + itemFromDate['@year'];
    const itemToDate = item.Period.To;
    ItemNode.querySelector('.period .to').textContent =
      itemToDate['@month'].substr(2, 2) + '-' + itemToDate['@year'];
    ItemNode.querySelector('.title').textContent = item.Title;
    ItemNode.querySelector('.organisation .name').textContent =
      item.Organisation.Name;
    ItemNode.querySelector('.organisation .contact .city').textContent =
      item.Organisation.ContactInfo.Address.Contact.Municipality;
    ItemNode.querySelector('.activities').innerHTML = item.Activities;
    // Skills
  }
  eduCloneItem.remove();
}

fillDataFromeuroPassDocument();
