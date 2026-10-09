export interface LegalDetails {
  statuteRef: string;
  minInsurance: string;
  majorCity: string;
  courtName: string;
  govDeadline: string;
  legalAuthority: string;
}

export const stateLegalDetails: Record<string, LegalDetails> = {
  alabama: {
    statuteRef: "Alabama Code § 6-5-280",
    minInsurance: "25/50/25",
    majorCity: "Birmingham",
    courtName: "Alabama Circuit Court",
    govDeadline: "6 months",
    legalAuthority: "Alabama's strict pure contributory negligence standard."
  },
  alaska: {
    statuteRef: "Alaska Statutes § 09.17.080",
    minInsurance: "50/100/25",
    majorCity: "Anchorage",
    courtName: "Alaska Superior Court",
    govDeadline: "2 years",
    legalAuthority: "Alaska's pure comparative fault system."
  },
  arizona: {
    statuteRef: "Arizona Revised Statutes § 12-2505",
    minInsurance: "25/50/15",
    majorCity: "Phoenix",
    courtName: "Arizona Superior Court",
    govDeadline: "180 days",
    legalAuthority: "Arizona's pure comparative fault standard and constitutional ban on damage caps."
  },
  arkansas: {
    statuteRef: "Arkansas Code § 16-64-122",
    minInsurance: "25/50/25",
    majorCity: "Little Rock",
    courtName: "Arkansas Circuit Court",
    govDeadline: "3 years",
    legalAuthority: "Arkansas's modified comparative negligence 50% bar."
  },
  california: {
    statuteRef: "California Civil Code § 1714",
    minInsurance: "30/60/15",
    majorCity: "Los Angeles",
    courtName: "Superior Court of California",
    govDeadline: "6 months",
    legalAuthority: "California's pure comparative negligence system."
  },
  colorado: {
    statuteRef: "Colorado Revised Statutes § 13-21-111",
    minInsurance: "25/50/15",
    majorCity: "Denver",
    courtName: "Colorado District Court",
    govDeadline: "180 days",
    legalAuthority: "Colorado's statutory non-economic damage cap under C.R.S. § 13-21-102.5."
  },
  connecticut: {
    statuteRef: "Connecticut General Statutes § 52-572h",
    minInsurance: "25/50/25",
    majorCity: "Hartford",
    courtName: "Connecticut Superior Court",
    govDeadline: "2 years",
    legalAuthority: "Connecticut's 51% modified comparative negligence standard."
  },
  delaware: {
    statuteRef: "Delaware Code Title 10 § 8132",
    minInsurance: "25/50/10",
    majorCity: "Wilmington",
    courtName: "Delaware Superior Court",
    govDeadline: "1 year",
    legalAuthority: "Delaware's modified comparative negligence 51% bar."
  },
  "district-of-columbia": {
    statuteRef: "D.C. Code § 35-2105",
    minInsurance: "25/50/10",
    majorCity: "Washington D.C.",
    courtName: "Superior Court of the District of Columbia",
    govDeadline: "6 months",
    legalAuthority: "the District of Columbia's contributory negligence rule with pedestrian exceptions."
  },
  florida: {
    statuteRef: "Florida Statutes § 768.81",
    minInsurance: "10/20/10",
    majorCity: "Miami",
    courtName: "Florida Circuit Court",
    govDeadline: "3 years",
    legalAuthority: "Florida's transition to 51% modified comparative negligence in March 2023."
  },
  georgia: {
    statuteRef: "Official Code of Georgia Annotated § 51-12-33",
    minInsurance: "25/50/25",
    majorCity: "Atlanta",
    courtName: "Georgia Superior Court",
    govDeadline: "6 months",
    legalAuthority: "Georgia's modified comparative negligence 50% bar."
  },
  hawaii: {
    statuteRef: "Hawaii Revised Statutes § 663-31",
    minInsurance: "20/40/10",
    majorCity: "Honolulu",
    courtName: "Hawaii Circuit Court",
    govDeadline: "2 years",
    legalAuthority: "Hawaii's no-fault PIP coverage and statutory non-economic caps."
  },
  idaho: {
    statuteRef: "Idaho Code § 6-801",
    minInsurance: "25/50/15",
    majorCity: "Boise",
    courtName: "Idaho District Court",
    govDeadline: "180 days",
    legalAuthority: "Idaho's 50% modified comparative negligence threshold and non-economic caps."
  },
  illinois: {
    statuteRef: "735 ILCS 5/2-1116",
    minInsurance: "25/50/20",
    majorCity: "Chicago",
    courtName: "Illinois Circuit Court",
    govDeadline: "1 year",
    legalAuthority: "Illinois's modified comparative negligence 51% bar."
  },
  indiana: {
    statuteRef: "Indiana Code § 34-51-2-5",
    minInsurance: "25/50/25",
    majorCity: "Indianapolis",
    courtName: "Indiana Superior Court",
    govDeadline: "180 days",
    legalAuthority: "Indiana's modified comparative negligence 51% bar."
  },
  iowa: {
    statuteRef: "Iowa Code § 668.3",
    minInsurance: "20/40/15",
    majorCity: "Des Moines",
    courtName: "Iowa District Court",
    govDeadline: "6 months",
    legalAuthority: "Iowa's 51% modified comparative negligence standard."
  },
  kansas: {
    statuteRef: "Kansas Statutes § 60-258a",
    minInsurance: "25/50/25",
    majorCity: "Wichita",
    courtName: "Kansas District Court",
    govDeadline: "1 year",
    legalAuthority: "Kansas's no-fault PIP laws and statutory non-economic cap."
  },
  kentucky: {
    statuteRef: "Kentucky Revised Statutes § 411.182",
    minInsurance: "25/50/25",
    majorCity: "Louisville",
    courtName: "Kentucky Circuit Court",
    govDeadline: "1 year",
    legalAuthority: "Kentucky's choice no-fault PIP coverage and pure comparative fault."
  },
  louisiana: {
    statuteRef: "Louisiana Civil Code Art. 2323",
    minInsurance: "15/30/25",
    majorCity: "New Orleans",
    courtName: "Louisiana District Court",
    govDeadline: "1 year",
    legalAuthority: "Louisiana's pure comparative fault standard and short 1-year deadline."
  },
  maine: {
    statuteRef: "Maine Revised Statutes Title 14 § 156",
    minInsurance: "50/100/25",
    majorCity: "Portland",
    courtName: "Maine Superior Court",
    govDeadline: "2 years",
    legalAuthority: "Maine's 50% modified comparative negligence bar and 6-year deadline."
  },
  maryland: {
    statuteRef: "Maryland Courts & Judicial Proceedings § 11-108",
    minInsurance: "30/60/15",
    majorCity: "Baltimore",
    courtName: "Maryland Circuit Court",
    govDeadline: "180 days",
    legalAuthority: "Maryland's pure contributory negligence rule and non-economic damage cap."
  },
  massachusetts: {
    statuteRef: "Massachusetts General Laws Ch. 231 § 85",
    minInsurance: "20/40/5",
    majorCity: "Boston",
    courtName: "Massachusetts Superior Court",
    govDeadline: "3 years",
    legalAuthority: "Massachusetts's Personal Injury Protection (PIP) system and 51% bar."
  },
  michigan: {
    statuteRef: "MCL § 500.3135 & MCL § 500.3009",
    minInsurance: "250k/500k (50k/100k opt-down)",
    majorCity: "Detroit",
    courtName: "Michigan Circuit Court",
    govDeadline: "6 months",
    legalAuthority: "Michigan No-Fault PIP framework, MCL § 500.3135 serious impairment threshold, and 51% modified comparative fault bar."
  },
  minnesota: {
    statuteRef: "Minnesota Statutes § 604.01",
    minInsurance: "30/60/10",
    majorCity: "Minneapolis",
    courtName: "Minnesota District Court",
    govDeadline: "180 days",
    legalAuthority: "Minnesota's no-fault PIP coverage and 51% modified comparative negligence bar."
  },
  mississippi: {
    statuteRef: "Mississippi Code § 11-7-15",
    minInsurance: "25/50/25",
    majorCity: "Jackson",
    courtName: "Mississippi Circuit Court",
    govDeadline: "90 days",
    legalAuthority: "Mississippi's pure comparative fault system."
  },
  missouri: {
    statuteRef: "RSMo § 537.765 & RSMo § 516.120",
    minInsurance: "25/50/25 (plus mandatory 25/50 UM)",
    majorCity: "Kansas City",
    courtName: "Missouri Circuit Court",
    govDeadline: "90 days",
    legalAuthority: "Missouri pure comparative fault (Gustafson v. Benda, RSMo § 537.765), mandatory Uninsured Motorist coverage (RSMo § 379.203), and 5-year SOL (RSMo § 516.120)."
  },
  montana: {
    statuteRef: "Montana Code Annotated § 27-1-702",
    minInsurance: "25/50/20",
    majorCity: "Billings",
    courtName: "Montana District Court",
    govDeadline: "180 days",
    legalAuthority: "Montana's modified comparative negligence 51% bar."
  },
  nebraska: {
    statuteRef: "Nebraska Revised Statutes § 25-21,185.09",
    minInsurance: "25/50/25",
    majorCity: "Omaha",
    courtName: "Nebraska District Court",
    govDeadline: "1 year",
    legalAuthority: "Nebraska's modified comparative negligence 50% bar."
  },
  nevada: {
    statuteRef: "Nevada Revised Statutes § 41.141",
    minInsurance: "25/50/20",
    majorCity: "Las Vegas",
    courtName: "Nevada District Court",
    govDeadline: "2 years",
    legalAuthority: "Nevada's modified comparative negligence 51% bar."
  },
  "new-hampshire": {
    statuteRef: "NH RSA 507:7-d",
    minInsurance: "Optional / Financial Responsibility (25/50/25 if insured, + mandatory $1,000 MedPay & matching UM)",
    majorCity: "Manchester",
    courtName: "New Hampshire Superior Court",
    govDeadline: "60 days",
    legalAuthority: "NH RSA 507:7-d (51% modified comparative fault) & RSA 264:3 (Financial Responsibility Law)."
  },
  "new-jersey": {
    statuteRef: "New Jersey Statutes § 2A:15-5.1",
    minInsurance: "15/30/5",
    majorCity: "Newark",
    courtName: "Superior Court of New Jersey",
    govDeadline: "90 days",
    legalAuthority: "New Jersey's choice no-fault PIP coverage and verbal lawsuit threshold."
  },
  "new-mexico": {
    statuteRef: "New Mexico Statutes § 41-3A-1",
    minInsurance: "25/50/15",
    majorCity: "Albuquerque",
    courtName: "New Mexico District Court",
    govDeadline: "90 days",
    legalAuthority: "New Mexico's pure comparative fault system."
  },
  "new-york": {
    statuteRef: "New York CPLR § 1411",
    minInsurance: "25/50/10",
    majorCity: "New York City",
    courtName: "New York Supreme Court",
    govDeadline: "90 days",
    legalAuthority: "New York's no-fault PIP coverage and CPLR § 1411 pure comparative fault."
  },
  "north-carolina": {
    statuteRef: "North Carolina General Statutes § 1-139",
    minInsurance: "30/60/25",
    majorCity: "Charlotte",
    courtName: "North Carolina Superior Court",
    govDeadline: "2 years",
    legalAuthority: "North Carolina's strict pure contributory negligence rule."
  },
  "north-dakota": {
    statuteRef: "North Dakota Century Code § 32-03.2-02",
    minInsurance: "25/50/25",
    majorCity: "Fargo",
    courtName: "North Dakota District Court",
    govDeadline: "180 days",
    legalAuthority: "North Dakota's no-fault PIP coverage and 51% modified comparative negligence bar."
  },
  ohio: {
    statuteRef: "Ohio Revised Code § 2315.33",
    minInsurance: "25/50/25",
    majorCity: "Columbus",
    courtName: "Ohio Court of Common Pleas",
    govDeadline: "180 days",
    legalAuthority: "Ohio's modified comparative negligence 51% bar."
  },
  oklahoma: {
    statuteRef: "23 O.S. § 13",
    minInsurance: "25/50/25 (plus statutory UM/UIM offer under 36 O.S. § 3636)",
    majorCity: "Oklahoma City",
    courtName: "Oklahoma District Court",
    govDeadline: "1 year (GTCA)",
    legalAuthority: "23 O.S. § 13 (51% modified comparative fault) & 47 O.S. § 7-601 (Mandatory Financial Responsibility)."
  },
  oregon: {
    statuteRef: "Oregon Revised Statutes § 31.600",
    minInsurance: "25/50/20",
    majorCity: "Portland",
    courtName: "Oregon Circuit Court",
    govDeadline: "180 days",
    legalAuthority: "Oregon's modified comparative negligence 51% bar."
  },
  pennsylvania: {
    statuteRef: "42 Pa.C.S. § 7102 (51% Comparative Fault) & 75 Pa.C.S. § 1705 (MVFRL Choice No-Fault)",
    minInsurance: "15/30/5",
    majorCity: "Philadelphia",
    courtName: "Pennsylvania Court of Common Pleas",
    govDeadline: "6 months",
    legalAuthority: "Pennsylvania's Choice No-Fault PIP system (75 Pa.C.S. § 1705) and 51% modified comparative fault bar (42 Pa.C.S. § 7102)."
  },
  "rhode-island": {
    statuteRef: "General Laws of Rhode Island § 9-20-4",
    minInsurance: "25/50/25",
    majorCity: "Providence",
    courtName: "Rhode Island Superior Court",
    govDeadline: "3 years",
    legalAuthority: "Rhode Island's pure comparative fault system."
  },
  "south-carolina": {
    statuteRef: "South Carolina Code § 15-38-15",
    minInsurance: "25/50/25",
    majorCity: "Columbia",
    courtName: "South Carolina Court of Common Pleas",
    govDeadline: "1 year",
    legalAuthority: "South Carolina's modified comparative negligence 51% bar."
  },
  "south-dakota": {
    statuteRef: "South Dakota Codified Laws § 20-9-2",
    minInsurance: "25/50/25",
    majorCity: "Sioux Falls",
    courtName: "South Dakota Circuit Court",
    govDeadline: "180 days",
    legalAuthority: "South Dakota's unique slight/gross comparative negligence standard."
  },
  tennessee: {
    statuteRef: "Tennessee Code Annotated § 29-11-139",
    minInsurance: "25/50/15",
    majorCity: "Nashville",
    courtName: "Tennessee Circuit Court",
    govDeadline: "1 year",
    legalAuthority: "Tennessee's modified comparative negligence 50% bar and statutory caps."
  },
  texas: {
    statuteRef: "Texas Civil Practice & Remedies Code § 33.001",
    minInsurance: "30/60/25",
    majorCity: "Houston",
    courtName: "Texas District Court",
    govDeadline: "180 days (State) / 45-90 days (Municipal)",
    legalAuthority: "Texas Proportionate Responsibility standard (Tex. Civ. Prac. & Rem. Code § 33.001), mandatory PIP rules (Tex. Ins. Code § 1952.152), and 2-year statute of limitations (Tex. Civ. Prac. & Rem. Code § 16.003)."
  },
  utah: {
    statuteRef: "Utah Code § 78B-5-818",
    minInsurance: "25/50/15",
    majorCity: "Salt Lake City",
    courtName: "Utah District Court",
    govDeadline: "1 year",
    legalAuthority: "Utah's no-fault PIP coverage and 50% modified comparative fault bar."
  },
  vermont: {
    statuteRef: "Vermont Statutes Title 12 § 1036",
    minInsurance: "25/50/10",
    majorCity: "Burlington",
    courtName: "Vermont Superior Court",
    govDeadline: "1 year",
    legalAuthority: "Vermont's modified comparative negligence 51% bar."
  },
  virginia: {
    statuteRef: "Virginia Code § 8.01-58",
    minInsurance: "30/60/20",
    majorCity: "Richmond",
    courtName: "Virginia Circuit Court",
    govDeadline: "6 months",
    legalAuthority: "Virginia's strict pure contributory negligence standard."
  },
  washington: {
    statuteRef: "Revised Code of Washington § 4.22.005",
    minInsurance: "25/50/10",
    majorCity: "Seattle",
    courtName: "Washington Superior Court",
    govDeadline: "120 days",
    legalAuthority: "Washington's pure comparative fault standard."
  },
  "west-virginia": {
    statuteRef: "West Virginia Code § 55-7-13a",
    minInsurance: "25/50/25",
    majorCity: "Charleston",
    courtName: "West Virginia Circuit Court",
    govDeadline: "2 years",
    legalAuthority: "West Virginia's modified comparative negligence 50% bar."
  },
  wisconsin: {
    statuteRef: "Wisconsin Statutes § 895.045",
    minInsurance: "25/50/10",
    majorCity: "Milwaukee",
    courtName: "Wisconsin Circuit Court",
    govDeadline: "120 days",
    legalAuthority: "Wisconsin's modified comparative negligence 51% bar."
  },
  wyoming: {
    statuteRef: "Wyoming Statutes § 1-1-109",
    minInsurance: "25/50/20",
    majorCity: "Cheyenne",
    courtName: "Wyoming District Court",
    govDeadline: "2 years",
    legalAuthority: "Wyoming's modified comparative negligence 51% bar."
  },
  ontario: {
    statuteRef: "Insurance Act, R.S.O. 1990, c. I.8",
    minInsurance: "$200,000 minimum",
    majorCity: "Toronto",
    courtName: "Ontario Superior Court of Justice",
    govDeadline: "10 days",
    legalAuthority: "Ontario's no-fault Statutory Accident Benefits Schedule (SABS) and statutory tort deductibles."
  },
  "british-columbia": {
    statuteRef: "Insurance (Vehicle) Act, R.S.B.C. 1996, c. 231",
    minInsurance: "$200,000 minimum",
    majorCity: "Vancouver",
    courtName: "Civil Resolution Tribunal (CRT)",
    govDeadline: "60 days",
    legalAuthority: "British Columbia's ICBC Enhanced Care no-fault insurance system."
  },
  alberta: {
    statuteRef: "Insurance Act, R.S.A. 2000, c. I-3",
    minInsurance: "$200,000 minimum",
    majorCity: "Calgary",
    courtName: "Alberta Court of King's Bench",
    govDeadline: "90 days",
    legalAuthority: "Alberta's Minor Injury Regulation (MIR) cap and Section B benefits."
  }
};
