import { stateLegalDetails } from "../data/stateLegalDetails";

function formatUSD(num: number | null) {
  if (num === null) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

export function generateNegligenceContent(
  stateName: string,
  rule: string,
  statuteRef: string
): string {
  const commonIntro = `Under ${stateName} personal injury statutes (specifically governed by the provisions of ${statuteRef}), liability for a motor vehicle collision is decided by establishing fault. `;
  
  if (rule === "contributory") {
    return `${commonIntro}The jurisdiction of ${stateName} is one of the very few in the United States that strictly adheres to the traditional <strong>pure contributory negligence doctrine</strong>. Under this severe legal standard, if you are found to have contributed to the car accident in any way whatsoever—even if your share of blame is evaluated at a mere 1%—you are legally barred from recovering any financial compensation from the other driver. In practice, this makes it extremely critical to secure exhaustive documentation (such as dashcam footage, witness reports, and police files) proving the other motorist was 100% responsible for the collision. Insurance adjusters will search for any reason to assign a tiny fraction of fault to you to deny your claim.`;
  }
  
  if (rule === "pure") {
    return `${commonIntro}${stateName} utilizes a <strong>pure comparative negligence standard</strong>. Unlike contributory jurisdictions, this system allows you to recover compensation even if you were found to be mostly responsible for the collision (up to 99% at fault). However, your final financial award is docked in direct proportion to your share of the blame. For example, if you incur $10,000 in damages but are found 30% at fault for failing to brake in time, your net payout is limited to $7,000. Under this system, insurance companies will actively negotiate to inflate your fault percentage to minimize their net payout.`;
  }
  
  if (rule === "modified_50") {
    return `${commonIntro}${stateName} enforces a <strong>50% modified comparative negligence bar</strong>. Under this rule, you remain eligible to seek damages from the at-fault driver only if your share of responsibility is strictly less than 50% (49% or lower). If you split blame 50/50 or are found to carry the majority of fault, you are completely barred from obtaining any recovery. If you qualify for recovery under the 50% bar, your total settlement is reduced by your exact percentage of liability. For instance, if your claim is worth $50,000 and you are 20% at fault, you will receive $40,000. If you are 50% at fault, you receive $0.`;
  }
  
  if (rule === "modified_51") {
    return `${commonIntro}${stateName} applies a <strong>51% modified comparative negligence standard</strong> (proportionate responsibility rules). This framework allows you to collect compensation as long as your share of fault does not exceed 50%. A 50/50 fault split still allows for a partial recovery. However, if you are found 51% or more responsible for causing the crash, your claim is legally barred. Any recovery is reduced proportionally by your specific fault rating. For example, if you are found 50% responsible for a collision and your damages are $100,000, you will collect $50,000. If you are 51% responsible, you collect nothing.`;
  }
  
  return "";
}

export function generateInsuranceContent(
  stateName: string,
  noFault: boolean,
  pipLimit: number,
  verbalThreshold: boolean,
  monetaryThreshold: number | null,
  minInsurance: string
): string {
  if (stateName === "Michigan") {
    return `Under Michigan's No-Fault auto insurance system (updated under PA 21 of 2019), your first line of recovery is your own Personal Injury Protection (PIP) medical coverage, regardless of who caused the crash. Drivers select from <strong>6 PIP medical coverage levels</strong>: (1) Unlimited coverage (statutory default), (2) $500,000 cap, (3) $250,000 cap, (4) $250,000 with PIP medical exclusion for qualified health coverage, (5) $50,000 cap (Medicaid enrollees only), or (6) PIP medical opt-out (eligible Medicare Parts A & B beneficiaries). PIP also provides wage loss replacement for 85% of gross income for up to 3 years. For third-party residual liability when suing an at-fault driver, Michigan policyholders maintain Bodily Injury (BI) coverage set at a default limit of <strong>$250,000 per person / $500,000 per accident</strong> (governed by MCL § 500.3009), with an elective statutory minimum opt-down of <strong>$50,000 / $100,000</strong> upon signing a DIFS waiver.`;
  }

  if (stateName === "Missouri") {
    return `Under Missouri motor vehicle financial responsibility laws (RSMo § 303.026), every driver must maintain minimum liability insurance set at <strong>25/50/25</strong> ($25,000 per person / $50,000 per accident for Bodily Injury Liability, and $25,000 for Property Damage Liability). Additionally, under <strong>RSMo § 379.203</strong>, Missouri strictly mandates that all policies include <strong>Uninsured Motorist (UM) coverage</strong> of at least $25,000 per person / $50,000 per accident to protect you if struck by an uninsured or hit-and-run driver. Unlike mandatory UM coverage, Underinsured Motorist (UIM) coverage is optional in Missouri. Liability limits set the maximum amount an insurance carrier is obligated to pay under a policy, rather than guaranteeing a specific payout.`;
  }

  if (stateName === "New Hampshire") {
    return `New Hampshire is unique in that it does not generally require every driver to purchase auto liability insurance under its <strong>Financial Responsibility Law (RSA 264:3)</strong>. However, drivers are legally required to prove financial responsibility if involved in an at-fault accident or convicted of certain serious driving violations. When an auto liability policy is purchased, New Hampshire law (RSA 264:25) requires minimum policy limits of <strong>25/50/25</strong> ($25,000 per person / $50,000 per accident for Bodily Injury Liability, and $25,000 for Property Damage Liability). Furthermore, under <strong>RSA 264:16</strong>, all auto policies issued in NH must include a minimum of <strong>$1,000 in Medical Payments (MedPay)</strong> coverage. Under <strong>RSA 264:15</strong>, policies must also include <strong>Uninsured/Underinsured Motorist (UM/UIM) coverage</strong> matching the policy's bodily injury liability limits. Policy limits set maximum carrier liability rather than guaranteeing a settlement payout.`;
  }

  const limitsIntro = `Every registered vehicle owner in ${stateName} must maintain minimum auto liability policy coverage, currently set at ${minInsurance}. `;
  
  if (!noFault) {
    return `${limitsIntro}As a traditional <strong>at-fault (tort) jurisdiction</strong>, the driver who caused the accident is financially liable for all subsequent damages. Following a crash, you have the immediate right to file a third-party claim against the negligent driver's liability insurance policy, or file a civil lawsuit in court to seek compensation for both economic losses (medical bills and lost wages) and non-economic damages (pain and suffering) without any statutory limits or PIP constraints. If the at-fault driver's policy is insufficient to cover your medical costs, you may look to your own Underinsured Motorist (UIM) policy for recovery.`;
  } else {
    const thresholdDesc = verbalThreshold
      ? "a serious injury verbal threshold, which requires proof of permanent physical impairment, significant scarring, or disfigurement to sue"
      : `a statutory monetary threshold, requiring your medical bills to exceed ${formatUSD(monetaryThreshold)} before you are eligible to bring a lawsuit`;

    return `${limitsIntro}Because ${stateName} operates under a <strong>no-fault auto insurance system</strong>, your first line of financial recovery is your own Personal Injury Protection (PIP) policy. Regardless of who caused the accident, your PIP insurer covers initial medical bills, diagnostic expenses, and wage replacement up to the statutory limit of ${formatUSD(pipLimit)}. You are legally restricted from bringing a lawsuit against the other motorist for non-economic pain and suffering unless your injuries satisfy the state's ${thresholdDesc}. If your injuries are minor, you must seek compensation solely through your own PIP coverage.`;
  }
}

export function generateStatuteContent(
  stateName: string,
  statuteOfLimitations: number,
  govDeadline: string
): string {
  if (stateName === "Michigan") {
    return `In Michigan, auto accident legal claims are governed by two distinct statutory deadlines:
    <ul class="list-disc pl-5 space-y-1 my-2">
      <li><strong>Third-Party Tort Lawsuits (3 Years):</strong> Under <strong>MCL § 600.5805(2)</strong>, you have 3 years from the date of the accident to file a civil lawsuit against an at-fault driver for excess economic damages and noneconomic pain and suffering.</li>
      <li><strong>First-Party PIP Insurance Claims (1 Year):</strong> Under <strong>MCL § 500.3145</strong>, you must give formal written notice of injury to your PIP insurance carrier within <strong>1 year</strong> of the accident. Additionally, the "one-year-back rule" restricts legal recovery of unpaid PIP benefits to expenses incurred within 1 year prior to filing suit.</li>
      <li><strong>Government Claims (6 Months):</strong> If your accident involves a public transit vehicle or government agency, an administrative notice of claim must be submitted within 6 months.</li>
    </ul>`;
  }

  if (stateName === "Missouri") {
    return `In Missouri, auto accident legal claims are governed by statutory deadlines:
    <ul class="list-disc pl-5 space-y-1 my-2">
      <li><strong>Personal Injury Tort Lawsuits (5 Years):</strong> Under <strong>RSMo § 516.120(4)</strong>, Missouri provides a 5-year statute of limitations to file a civil lawsuit for personal injury car accident claims—one of the longest in the United States.</li>
      <li><strong>Wrongful Death Lawsuits (3 Years):</strong> Under <strong>RSMo § 537.100</strong>, claims for wrongful death resulting from a motor vehicle crash must be filed within 3 years of the date of death.</li>
      <li><strong>Municipal Entity Notice (90 Days):</strong> If your accident involves a municipality or city government agency (such as a city bus or public road defect in Kansas City or St. Louis), a formal written notice of claim must be served within 90 days under <strong>RSMo § 82.210</strong> before initiating litigation.</li>
    </ul>`;
  }

  if (stateName === "New Hampshire") {
    return `In New Hampshire, personal injury and property damage civil claims are governed by statutory deadlines:
    <ul class="list-disc pl-5 space-y-1 my-2">
      <li><strong>Personal Injury Tort Lawsuits (3 Years):</strong> Under <strong>RSA 508:4</strong>, you have 3 years from the date of the collision to file a personal injury lawsuit in court.</li>
      <li><strong>Property Damage Lawsuits (3 Years):</strong> Claims for damage to your motor vehicle must also be filed within 3 years under <strong>RSA 508:4</strong>.</li>
      <li><strong>Wrongful Death Lawsuits (3 Years):</strong> Under <strong>RSA 508:4</strong>, claims for wrongful death arising from a vehicle crash must be initiated within 3 years.</li>
      <li><strong>Municipal Entity Notice (60 Days):</strong> If your accident involves a town, city, or municipal government agency (such as a municipal vehicle or town road maintenance defect), a formal written notice of claim must be delivered by registered mail to the clerk within <strong>60 days</strong> under <strong>RSA 507-B:7</strong> before filing a lawsuit.</li>
    </ul>`;
  }

  return `To preserve your legal right to seek recovery in ${stateName}, you must file a personal injury lawsuit within a strict time frame. The standard statute of limitations for car accident claims is <strong>${statuteOfLimitations} years</strong> from the date of the collision. If you let this deadline expire without filing your civil complaint, you lose your right to sue permanently. Furthermore, if your accident involved a government vehicle or municipal entity (such as a city bus or state vehicle), you must file a formal administrative notice of claim much sooner, typically within <strong>${govDeadline}</strong> of the incident. This notice is a mandatory prerequisite to suing a government agency.`;
}

export function generateDamageCapContent(
  stateName: string,
  cap: number | null,
  damageCapExplanation: string | null
): string {
  if (stateName === "Michigan") {
    return `For third-party motor vehicle claims in Michigan, there are no statutory dollar caps on noneconomic damages (pain and suffering). However, under <strong>MCL § 500.3135(1) & (5)</strong>, recovery for pain and suffering is restricted by a strict statutory verbal threshold. To recover noneconomic damages from an at-fault driver, an injured victim must establish a <strong>"serious impairment of body function,"</strong> defined by a 3-part test:
    <ol class="list-decimal pl-5 space-y-1 my-2">
      <li><strong>Objectively Manifested:</strong> The impairment must be observable or perceivable from actual symptoms by a medical professional (verified via clinical testing, MRIs, X-rays, or physician findings).</li>
      <li><strong>Important Body Function:</strong> The impairment must involve a body function of great value, significance, or consequence to the specific individual.</li>
      <li><strong>Affects General Ability to Lead Normal Life:</strong> The impairment must influence the person's capacity to live in their normal, pre-accident manner.</li>
    </ol>
    Pain and suffering multipliers are not established by statute; general damages are evaluated on a case-by-case basis only after this statutory threshold is satisfied.`;
  }

  if (stateName === "Missouri") {
    return `Under Missouri law, there are no statutory caps or legislative limits on general non-economic damages (pain and suffering) for standard passenger vehicle personal injury claims. Under the Missouri Constitution (Art. I, § 22) and Missouri Supreme Court precedent (such as <em>Watts v. Lester E. Cox Medical Centers</em>), determining non-economic damages is a constitutional jury function. Non-economic loss is evaluated based on severity of injury, treatment history, and impact on daily living. Illustrative multipliers are tools for calculation models rather than statutory mandates.`;
  }

  if (stateName === "New Hampshire") {
    return `Under New Hampshire law, there are no statutory caps or legislative limits on general non-economic damages (pain and suffering) for standard passenger vehicle personal injury claims. Following landmark decisions by the New Hampshire Supreme Court (such as <em>Carson v. Maurer</em> and <em>Brannigan v. Usitalo</em>), statutory damage caps on personal injury torts were declared unconstitutional. Non-economic damages are evaluated based on injury severity, diagnostic evidence, medical treatment history, and impact on daily living. Illustrative calculation multipliers serve as modeling tools rather than statutory rules.`;
  }

  if (cap !== null && damageCapExplanation) {
    return damageCapExplanation;
  }
  
  return `For standard passenger vehicle car accident claims, ${stateName} does not impose any statutory caps or legislative limits on general non-economic damages, which covers pain and suffering, emotional distress, loss of consortium, and reduced quality of life. The value of your pain and suffering compensation is evaluated based on the clinical severity of the injuries, the duration of your medical treatment, and the documented impact on your daily lifestyle. Juries and insurance adjusters use multipliers or daily rate estimations to value these subjective losses.`;
}

export function generateSummaryContent(
  stateName: string,
  explanation: string,
  majorCity: string,
  courtName: string
): string {
  return `${explanation} When negotiating an auto claim in ${stateName}, insurance adjusters will analyze police reports, scrutinize your treatment records, and calculate fault share. If you file a formal lawsuit in the ${courtName} (such as the court facility in ${majorCity}), having meticulous documentation (including diagnostic MRIs, doctor notes, and wage reports) is crucial to defend against adjusters trying to discount your claim value. An attorney can help compile this evidence to maximize your final payout.`;
}

export function generateSettlementExample(
  stateSlug: string,
  stateName: string,
  negligenceRule: string,
  damageCap: number | null,
  majorCity: string,
  courtName: string
): string {
  let explanation = "";
  
  if (stateSlug === "michigan") {
    explanation = `Let's look at how a claim is evaluated in <strong>${majorCity}, Michigan</strong> under state No-Fault rules:
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li><strong>First-Party PIP Recovery (Your Insurer):</strong> Pays 100% of allowable medical expenses up to your selected PIP choice level (e.g. $250,000 or Unlimited) plus 85% of lost wages for up to 3 years, regardless of fault.</li>
      <li><strong>Third-Party Tort Claim (At-Fault Driver):</strong> If medical bills exceed your PIP limit or if you suffer a qualifying <em>serious impairment of body function</em> under MCL § 500.3135, you may claim noneconomic pain and suffering from the at-fault driver's Bodily Injury policy ($250k/$500k default).</li>
      <li><strong>51% Modified Comparative Fault:</strong> If you are found 10% at fault for the crash, any third-party tort recovery is reduced by 10%. If you are 51% or more at fault, third-party noneconomic recovery is barred.</li>
      <li><strong>Michigan Mini-Tort ($3,000 Cap):</strong> Out-of-pocket damage to your motor vehicle (such as your collision deductible) can be claimed from the at-fault driver up to the statutory limit of <strong>$3,000</strong> under MCL § 500.3135(3)(e).</li>
    </ul>
    This illustrative framework demonstrates how First-Party PIP benefits operate alongside Third-Party tort claims in the ${courtName}.`;
    return explanation;
  }

  if (stateSlug === "missouri") {
    explanation = `Let's look at a localized settlement example in <strong>${majorCity}, Missouri</strong> under state comparative fault rules:
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li><strong>Economic Losses:</strong> Medical treatment ($15,000) and lost income ($5,000) equal $20,000 in documented economic losses.</li>
      <li><strong>Pain and Suffering (Illustrative Estimate):</strong> General damages estimated at $37,500 based on injury severity and daily impact.</li>
      <li><strong>Gross Calculated Value:</strong> $20,000 + $37,500 = $57,500 gross total.</li>
      <li><strong>Pure Comparative Fault Adjustment (20% Fault):</strong> Under Missouri's pure comparative fault rule (<em>Gustafson v. Benda</em> & RSMo § 537.765), if the claimant is found 20% responsible, the payout is reduced by 20% (-$11,500), producing an estimated net settlement of <strong>$46,000</strong>.</li>
      <li><strong>Pure Comparative Fault Principle:</strong> Even if a driver is 80% responsible for a crash, Missouri law permits recovering 20% of their total proven damages from the other negligent party.</li>
    </ul>
    This illustrative framework models potential recovery when presenting a demand to an insurer or filing in the ${courtName}.`;
    return explanation;
  }

  if (stateSlug === "new-hampshire") {
    explanation = `Let's look at a localized settlement example in <strong>${majorCity}, New Hampshire</strong> under state comparative fault and financial responsibility rules:
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li><strong>Economic Losses:</strong> Medical treatment ($15,000) and lost wages ($5,000) equal $20,000 in documented economic losses.</li>
      <li><strong>Pain and Suffering (Illustrative Estimate):</strong> General damages estimated at $37,500 (calculated at a 2.5x multiplier of medical bills).</li>
      <li><strong>Gross Calculated Value:</strong> $20,000 + $37,500 = $57,500 gross total.</li>
      <li><strong>51% Modified Comparative Fault Adjustment (20% Fault):</strong> Under NH RSA 507:7-d, because fault (20%) is 50% or less, the claimant can recover. The payout is reduced by 20% (-$11,500), resulting in an estimated net settlement of <strong>$46,000</strong>.</li>
      <li><strong>51% Bar Rule:</strong> If the claimant were found 51% or more at fault for the accident, recovery would be completely barred ($0).</li>
    </ul>
    This illustrative framework models potential recovery when presenting a claim to an insurer or filing in the ${courtName}.`;
    return explanation;
  }

  // Custom math for the state page to show localized calculation
  let medicalBills = 15000;
  let lostWages = 5000;
  let multiplier = 2.5;
  let grossEconomic = medicalBills + lostWages;
  let painSuffering = medicalBills * multiplier;
  
  if (damageCap !== null && painSuffering > damageCap) {
    painSuffering = damageCap;
  }
  
  let grossSettlement = grossEconomic + painSuffering;
  
  let faultPct = 10;
  let faultDeduction = grossSettlement * (faultPct / 100);
  let netSettlement = grossSettlement - faultDeduction;
  
  if (negligenceRule === "contributory") {
    // Under contributory negligence, 10% fault means $0
    explanation = `Let's look at a localized settlement example. A driver is involved in a rear-end collision in <strong>${majorCity}, ${stateName}</strong>. They incur $15,000 in past medical treatments and $5,000 in lost income, resulting in $20,000 in economic losses. 
    Using a standard 2.5x multiplier for pain and suffering, the general damages would be valued at $37,500. 
    However, under ${stateName}'s strict pure contributory negligence standard:
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li>Economic Losses (Medical + Wages): <strong>${formatUSD(grossEconomic)}</strong></li>
      <li>Pain and Suffering Valuation (2.5x Medical): <strong>${formatUSD(painSuffering)}</strong></li>
      <li>Gross Target Payout: <strong>${formatUSD(grossSettlement)}</strong></li>
      <li>Shared Fault Assessment (e.g. for a minor delay in braking): <strong>10% fault</strong></li>
      <li><strong>Final Net Settlement: $0 (Barred due to 1% contributory negligence threshold)</strong></li>
    </ul>
    Because a minor 10% share of responsibility bars recovery entirely, injury victims in ${stateName} must present clear police reports and witness testimony to prove they carry 0% fault.`;
  } else if (stateSlug === "british-columbia") {
    explanation = `Under British Columbia's Enhanced Care model, lawsuits for general damages are barred. Let's look at how benefits are structured for a crash in <strong>${majorCity}, B.C.</strong>:
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li>Medical treatments (Physiotherapy, Chiropractic care, orthopedic consults): <strong>Covered 100% directly by ICBC (no caps)</strong></li>
      <li>Lost Wages: <strong>90% of net income replacement up to the statutory cap</strong></li>
      <li>Pain & Suffering / General Damage Lawsuit: <strong>$0 (Eliminated under no-fault)</strong></li>
      <li>Permanent Impairment Lump-sum Award: <strong>Calculated based on percentage of permanent physical functional loss</strong></li>
    </ul>
    Disputes in British Columbia are filed with the Civil Resolution Tribunal (CRT) rather than traditional courtrooms.`;
  } else {
    explanation = `Let's look at a localized settlement example. A driver is involved in an auto accident in <strong>${majorCity}, ${stateName}</strong>. They incur $15,000 in medical treatments and $5,000 in lost income, resulting in $20,000 in economic losses. 
    Applying a standard 2.5x multiplier, general pain and suffering damages are estimated at $37,500. 
    Under ${stateName}'s negligence rules (assuming the driver is found 10% responsible due to a minor driving reaction delay):
    <ul class="list-disc pl-5 space-y-1 my-3">
      <li>Economic Losses (Medical + Wages): <strong>${formatUSD(grossEconomic)}</strong></li>
      <li>Pain and Suffering Valuation (2.5x Medical): <strong>${formatUSD(painSuffering)}</strong></li>
      <li>Gross Settlement Payout Target: <strong>${formatUSD(grossSettlement)}</strong></li>
      <li>Fault Reduction (10% shared blame): <strong>-${formatUSD(faultDeduction)}</strong></li>
      <li><strong>Final Estimated Net Settlement: ${formatUSD(netSettlement)}</strong></li>
    </ul>
    This calculation forms the basis of the demand letter sent to the insurance company and would be filed in the ${courtName} if formal litigation is initiated.`;
  }
  
  return explanation;
}

export function generateFAQs(
  stateName: string,
  negligenceRule: string,
  statuteOfLimitations: number,
  damageCap: number | null,
  noFault: boolean,
  pipLimit: number,
  verbalThreshold: boolean,
  monetaryThreshold: number | null,
  statuteRef: string,
  courtName: string
): Array<{ question: string; answer: string }> {
  if (stateName === "Michigan") {
    return [
      {
        question: "How are auto accident claims evaluated in Michigan?",
        answer: "Michigan auto accident recovery operates under a two-part system. First-party Personal Injury Protection (PIP) pays your allowable medical expenses (up to your chosen PIP choice level: $50k, $250k, $500k, or Unlimited) and 85% of lost wages for up to 3 years, regardless of fault. A third-party tort claim against the at-fault driver for noneconomic pain and suffering is permitted only if your injury satisfies the statutory 'serious impairment of body function' threshold under MCL § 500.3135. Pain and suffering multipliers are not fixed by law and apply only after meeting this threshold."
      },
      {
        question: "What are the 6 PIP medical coverage options in Michigan?",
        answer: "Under the 2019 Michigan Auto Insurance Reform (PA 21), policyholders can choose from 6 PIP medical coverage levels: (1) Unlimited PIP medical coverage (statutory default), (2) $500,000 limit, (3) $250,000 limit, (4) $250,000 limit with PIP medical exclusion for qualified health coverage, (5) $50,000 limit (available to Medicaid enrollees only), or (6) PIP medical opt-out (available to eligible Medicare Parts A & B beneficiaries)."
      },
      {
        question: "What is Michigan's 'serious impairment of body function' threshold?",
        answer: "Under MCL § 500.3135(5), to sue an at-fault driver for noneconomic pain and suffering, your injury must satisfy a 3-part test: (1) it must be <strong>objectively manifested</strong> (perceivable by medical symptoms verified via medical testing or physician evaluation), (2) it must impair an <strong>important body function</strong>, and (3) it must <strong>affect your general ability to lead your normal life</strong>."
      },
      {
        question: "What is the Michigan Mini-Tort limit for vehicle property damage?",
        answer: "Under MCL § 500.3135(3)(e), you can recover up to <strong>$3,000</strong> from an at-fault driver for out-of-pocket vehicle property damage (such as your collision deductible), provided you are 50% or less at fault. Mini-Tort covers vehicle damage not otherwise reimbursed by insurance, but does not cover medical bills or general personal items."
      },
      {
        question: "What is the difference between Michigan's 3-year and 1-year deadlines?",
        answer: "Under MCL § 600.5805(2), you have <strong>3 years</strong> from the date of the collision to file a third-party tort lawsuit against an at-fault driver. However, under MCL § 500.3145, first-party PIP claims for medical and wage benefits from your own insurer require written notice within <strong>1 year</strong> of the crash, and the 'one-year-back rule' restricts legal recovery to expenses incurred within 1 year prior to filing a lawsuit."
      },
      {
        question: "What bodily injury liability limits apply if I sue an at-fault driver in Michigan?",
        answer: "Under MCL § 500.3009, Michigan auto policies carry a default Bodily Injury (BI) liability limit of <strong>$250,000 per person / $500,000 per accident</strong>. Drivers may opt down to lower limits by signing a DIFS waiver, but the absolute statutory minimum limit permitted is <strong>$50,000 / $100,000</strong>."
      }
    ];
  }
  if (stateName === "Missouri") {
    return [
      {
        question: "How are car accident settlements evaluated in Missouri?",
        answer: "Missouri auto accident claims combine documented economic losses (medical expenses and lost income) with non-economic damages (pain and suffering), adjusted for pure comparative fault. Pain and suffering multipliers are illustrative calculation estimates rather than statutory rules. Under Missouri's pure comparative fault doctrine (RSMo § 537.765), your settlement is reduced by your exact percentage of responsibility."
      },
      {
        question: "How does Missouri's pure comparative fault rule work?",
        answer: "Under Missouri's pure comparative fault doctrine established in Gustafson v. Benda and codified in RSMo § 537.765, you can recover damages even if you were mostly responsible for the collision (up to 99% at fault). Your final recovery is reduced in direct proportion to your share of fault. For example, if your total damages are $100,000 and you are 20% at fault, you collect $80,000."
      },
      {
        question: "What are Missouri's mandatory auto insurance requirements?",
        answer: "Under RSMo § 303.026 and RSMo § 379.203, Missouri drivers must carry minimum liability coverage of <strong>25/50/25</strong> ($25,000 per person / $50,000 per accident for Bodily Injury Liability, and $25,000 for Property Damage Liability) plus mandatory <strong>Uninsured Motorist (UM) coverage</strong> of $25,000 per person / $50,000 per accident. Underinsured Motorist (UIM) coverage is optional."
      },
      {
        question: "How long do I have to file a car accident lawsuit in Missouri?",
        answer: "Under RSMo § 516.120(4), Missouri provides a <strong>5-year statute of limitations</strong> for personal injury car accident lawsuits—one of the longest deadlines in the nation. However, wrongful death lawsuits must be filed within <strong>3 years</strong> under RSMo § 537.100, and claims against municipal government entities require formal written notice within 90 days under RSMo § 82.210."
      },
      {
        question: "Does Missouri place statutory caps on pain and suffering damages?",
        answer: "No. Missouri does not impose statutory caps on pain and suffering or general non-economic damages for standard passenger vehicle auto accident claims. Determining non-economic damages is a core fact-finding function protected under the right to trial by jury in Article I, Section 22 of the Missouri Constitution."
      },
      {
        question: "What is the difference between Uninsured (UM) and Underinsured (UIM) coverage in Missouri?",
        answer: "Uninsured Motorist (UM) coverage ($25k/$50k) is mandatory under RSMo § 379.203 and covers your injuries if you are struck by a driver with no auto insurance or a hit-and-run vehicle. Underinsured Motorist (UIM) coverage is optional in Missouri and pays excess damages if the at-fault driver has insurance but their liability policy limit is too low to cover your full damages."
      }
    ];
  }

  if (stateName === "New Hampshire") {
    return [
      {
        question: "How are car accident settlements calculated in New Hampshire?",
        answer: "New Hampshire auto accident settlements combine documented economic losses (medical bills, lost income, vehicle damage) with non-economic damages (pain and suffering), adjusted for shared fault. Pain and suffering multipliers are illustrative estimation tools rather than legal formulas. Under New Hampshire's 51% modified comparative fault rule (RSA 507:7-d), your final recovery is reduced by your exact percentage of fault."
      },
      {
        question: "How does New Hampshire's 51% modified comparative fault rule work?",
        answer: "Under NH RSA 507:7-d, you can recover financial compensation as long as your fault is <strong>50% or less</strong>. Your total recovery is reduced proportionally by your percentage of blame (for example, a 20% fault share reduces a $50,000 award to $40,000). However, if you are found <strong>51% or more at fault</strong>, you are legally barred from recovering any damages."
      },
      {
        question: "Is auto insurance mandatory in New Hampshire?",
        answer: "No. New Hampshire is the only state in the U.S. that does not generally mandate auto insurance for all drivers. Instead, drivers operate under the state's <strong>Financial Responsibility Law (RSA 264:3)</strong>. However, if a driver chooses to purchase an auto liability policy, RSA 264:25 requires minimum policy limits of <strong>25/50/25</strong>, RSA 264:16 mandates at least <strong>$1,000 in Medical Payments (MedPay)</strong>, and RSA 264:15 mandates <strong>Uninsured/Underinsured Motorist (UM/UIM) coverage</strong> matching the liability limits."
      },
      {
        question: "How long do I have to file a car accident lawsuit in New Hampshire?",
        answer: "Under <strong>RSA 508:4</strong>, New Hampshire provides a <strong>3-year statute of limitations</strong> from the date of the crash for personal injury, property damage, and wrongful death lawsuits. However, if your claim involves a town, city, or municipal government entity, a formal written notice of claim must be delivered by registered mail within <strong>60 days</strong> under <strong>RSA 507-B:7</strong>."
      },
      {
        question: "Does New Hampshire place caps on pain and suffering damages?",
        answer: "No. New Hampshire does not impose statutory caps or legislative limits on general non-economic damages (pain and suffering) for standard passenger vehicle car accident claims. The New Hampshire Supreme Court has struck down statutory personal injury damage caps as unconstitutional."
      },
      {
        question: "What is the importance of Uninsured Motorist (UM) coverage in New Hampshire?",
        answer: "Because auto insurance is optional for drivers in New Hampshire, Uninsured Motorist (UM/UIM) coverage on your own policy is vital. Under RSA 264:15, if you purchase auto insurance in New Hampshire, UM/UIM coverage is mandatory and matches your liability limits, protecting you if you are struck by an uninsured driver."
      }
    ];
  }

  const faqs = [
    {
      question: `How is a car accident settlement calculated in ${stateName}?`,
      answer: `Settlements in ${stateName} are determined by combining your economic losses (including ambulance rides, hospital treatments, surgery, medications, and lost income) with non-economic damages (pain and suffering). To value pain and suffering, claims adjusters typically apply a multiplier of 1.5x to 5x your medical bills, depending on the severity of the injury. The final amount is then adjusted to match local negligence limits.`
    }
  ];

  // Negligence FAQ
  let negligenceAnswer = "";
  if (negligenceRule === "contributory") {
    negligenceAnswer = `Under ${stateName}'s strict pure contributory negligence rule, sharing even 1% of the fault for the crash completely bars you from recovering any compensation. You must prove the other motorist was 100% responsible to receive a payout.`;
  } else if (negligenceRule === "pure") {
    negligenceAnswer = `Under ${stateName}'s pure comparative negligence system, you can recover damages even if you are 99% responsible. However, your final payout is reduced in proportion to your fault. For example, if you are found 20% responsible for a collision, your settlement check will be docked by 20%.`;
  } else {
    const limitPct = negligenceRule === "modified_50" ? "50%" : "51%";
    const cutoffText = negligenceRule === "modified_50" ? "50% or more" : "51% or more";
    negligenceAnswer = `Under the ${limitPct} modified comparative negligence rule enforced by ${statuteRef}, you can recover compensation only if your fault is less than ${limitPct} (49% or less for the 50% bar, 50% or less for the 51% bar). If your share of responsibility meets or exceeds the threshold, you recover nothing. If you qualify for recovery, your award is reduced by your fault share.`;
  }

  faqs.push({
    question: `What happens if I share fault for an accident in ${stateName}?`,
    answer: negligenceAnswer
  });

  // Deadline FAQ
  faqs.push({
    question: `How long do I have to file a personal injury claim in ${stateName}?`,
    answer: `The standard statute of limitations to file a car accident lawsuit in the ${courtName} is <strong>${statuteOfLimitations} years</strong> from the date of the collision. If your claim is against a municipal or state government entity (e.g., a city transit bus), a notice of claim must be filed much earlier, in accordance with ${stateName} administrative deadlines.`
  });

  // Dynamic Q4: What damages can I recover?
  faqs.push({
    question: `What types of damages can I recover in a ${stateName} car accident claim?`,
    answer: `You can recover two categories of compensatory damages. <strong>Economic damages</strong> include concrete financial losses like ambulance fees, surgeries, physical therapy, prescription medication, lost wages, and vehicle repair costs. <strong>Non-economic damages</strong> cover subjective losses like physical pain, emotional distress, loss of life enjoyment, and loss of consortium.`
  });

  // Dynamic Q5: Passenger claims
  faqs.push({
    question: `Can I recover compensation if I was an injured passenger in ${stateName}?`,
    answer: `Yes. Passengers are almost never at fault for a car accident. In ${stateName}, you can file a claim against the insurance policy of the driver of the car you were in, or the policy of the other driver who caused the collision. If you have your own auto insurance policy, you may also access medical payments or PIP benefits.`
  });

  // Dynamic Q6: DMV/Police reporting
  faqs.push({
    question: `Do I need to file a police report or report the crash to the state in ${stateName}?`,
    answer: `Under ${stateName} law, you are generally required to report any motor vehicle accident to local police immediately if it results in bodily injury, death, or property damage exceeding statutory limits (typically $500 to $1,000). A formal police report serves as critical neutral evidence for your insurance settlement.`
  });

  // Dynamic Q7: Damage Caps
  let damageCapText = "";
  if (damageCap !== null) {
    damageCapText = `Yes. ${stateName} imposes statutory caps on certain non-economic damages, particularly under specific categories such as medical malpractice or against municipal government agencies. Under the code, these limits restrict general damages.`;
  } else {
    damageCapText = `No. ${stateName} does not impose legislative limits or caps on pain and suffering or general damages resulting from standard passenger vehicle car accidents. You can pursue the full value of your non-economic damages.`;
  }
  faqs.push({
    question: `Does ${stateName} place caps on pain and suffering damages?`,
    answer: damageCapText
  });

  // Dynamic Q8: Hiring a lawyer
  faqs.push({
    question: `How does hiring a personal injury lawyer affect my settlement in ${stateName}?`,
    answer: `Studies by the Insurance Research Council show that injury claimants represented by an attorney receive payouts 3 to 4 times higher on average than unrepresented claimants, even after paying attorney fees. A lawyer handles negotiations, gathers evidence, and files formal complaints in the ${courtName} to protect your rights.`
  });

  return faqs;
}
