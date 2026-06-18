/**
 * Deterministic Text Spinner for SEO Uniqueness.
 * Uses a seeded pseudo-random generator based on the state's slug/name
 * to choose from various sentence patterns and synonyms.
 */

// Simple seeded random generator (Mulberry32)
function getSeededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return function () {
    let t = (h += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Selects an element from an array using a seeded random function
function pickOne<T>(arr: T[], randFn: () => number): T {
  const index = Math.floor(randFn() * arr.length);
  return arr[index];
}

function formatUSD(num: number | null) {
  if (num === null) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(num);
}

/**
 * 1. Negligence & Shared Fault Section
 */
export function spinNegligence(stateName: string, rule: string): string {
  const rand = getSeededRandom(stateName + "_negligence");

  if (rule === "contributory") {
    const s1 = [
      `${stateName} operates under a strict pure contributory negligence rule.`,
      `The courts and insurers in ${stateName} apply a pure contributory negligence standard.`,
      `Under ${stateName} statutes, a pure contributory negligence framework is enforced.`,
      `Liability claims in ${stateName} are governed by a strict contributory fault doctrine.`,
    ];
    const s2 = [
      `If you contributed to the accident in any way (even 1% at fault), you are legally barred from recovering any damages from the other driver.`,
      `If you are found even 1% responsible for the collision, you are legally prohibited from obtaining any compensation from the other party.`,
      `Even a minor share of blame (such as 1% fault) will completely bar you from recovering any payout.`,
      `Under this strict rule, if you bear any percentage of fault whatsoever, your right to seek damages is barred.`,
    ];
    return `${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
  }

  if (rule === "pure") {
    const s1 = [
      `${stateName} operates under a pure comparative negligence system.`,
      `In ${stateName}, the courts and insurers follow a pure comparative negligence doctrine.`,
      `Under ${stateName} law, a pure comparative negligence framework is used to evaluate accident liability.`,
      `Liability for car crashes in ${stateName} is governed by a pure comparative fault rule.`,
    ];
    const s2 = [
      `This means you can recover compensation even if you were 99% at fault, though your settlement will be reduced by your exact percentage of fault.`,
      `You are permitted to seek damages even if you are mostly responsible (up to 99%), but your final payout is decreased in direct proportion to your share of blame.`,
      `Even if you carry the majority of responsibility for the collision, you can still obtain financial recovery, though it will be reduced by your percentage of fault.`,
      `Your final settlement will be docked by your specific percentage of liability, but there is no threshold of fault that bars you from recovering damages.`,
    ];
    return `${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
  }

  if (rule === "modified_50") {
    const s1 = [
      `${stateName} operates under a 50% modified comparative negligence bar.`,
      `The legal system in ${stateName} enforces a 50% modified comparative negligence rule.`,
      `Under ${stateName} personal injury statutes, a 50% modified comparative fault standard applies.`,
      `In ${stateName}, liability claims are subject to a 50% comparative negligence threshold.`,
    ];
    const s2 = [
      `You can only recover damages if your fault is less than 50% (49% or less). If you are 50% or more at fault, you get nothing.`,
      `Compensation is only available if you bear 49% or less of the responsibility. Sharing 50% or more of the blame bars you from any recovery.`,
      `You qualify for a settlement only if your fault is below 50%. A fault rating of 50% or higher legally prevents you from collecting any payout.`,
      `To obtain damages, you must be less than 50% at fault. If you are found to be 50% or more responsible, your claim will be barred entirely.`,
    ];
    const s3 = [
      `Damages are reduced proportionally by your fault percentage.`,
      `Your recovery will be reduced by your exact percentage of fault.`,
      `Your settlement is docked in proportion to your share of liability.`,
      `Any financial award will be adjusted downward based on your percentage of blame.`,
    ];
    return `${pickOne(s1, rand)} ${pickOne(s2, rand)} ${pickOne(s3, rand)}`;
  }

  if (rule === "modified_51") {
    const s1 = [
      `${stateName} operates under a 51% modified comparative negligence bar.`,
      `In ${stateName}, shared liability is governed by a 51% modified comparative negligence rule.`,
      `A 51% modified comparative fault standard is enforced under ${stateName} law.`,
      `Liability for collisions in ${stateName} is assessed using a 51% comparative negligence system.`,
    ];
    const s2 = [
      `You can recover damages as long as your fault does not exceed 50% (a 50/50 split allows recovery). If you are 51% or more at fault, your recovery is barred.`,
      `You can pursue compensation provided you are 50% or less at fault. If you are found 51% or more to blame, you cannot collect any damages.`,
      `As long as your fault is 50% or below, you remain eligible to collect a settlement. However, a fault rating of 51% or higher bars you from recovery.`,
      `Recovery is permitted only if your share of fault is 50% or less. If you are 51% or more responsible for the collision, you receive nothing.`,
    ];
    const s3 = [
      `Your final settlement is reduced proportionally by your fault percentage.`,
      `Any payout will be docked by your specific percentage of liability.`,
      `Your damages are reduced in direct proportion to your share of the blame.`,
      `The total compensation is adjusted downward based on your percentage of fault.`,
    ];
    return `${pickOne(s1, rand)} ${pickOne(s2, rand)} ${pickOne(s3, rand)}`;
  }

  return "";
}

/**
 * 2. Insurance & PIP Thresholds Section
 */
export function spinInsurance(
  stateName: string,
  noFault: boolean,
  pipLimit: number,
  verbalThreshold: boolean,
  monetaryThreshold: number | null
): string {
  const rand = getSeededRandom(stateName + "_insurance");

  if (!noFault) {
    const s1 = [
      `${stateName} is an at-fault (tort) state.`,
      `Under ${stateName}'s insurance framework, an at-fault (tort) system is used.`,
      `In ${stateName}, car insurance rules operate on a traditional at-fault tort basis.`,
      `As an at-fault state, ${stateName} places liability on the driver who caused the crash.`,
    ];
    const s2 = [
      `If another driver caused the collision, you can immediately file a claim against their liability coverage or file a personal injury lawsuit for both medical bills and pain and suffering without needing to meet a PIP threshold.`,
      `This means you are free to seek compensation directly from the negligent driver's insurer, or file a lawsuit for economic and non-economic damages without having to bypass a no-fault limit.`,
      `You have the right to file a claim against the liable driver's insurance or sue them for your medical bills, lost wages, and pain and suffering from day one.`,
      `There is no requirement to use personal PIP insurance first; you can hold the negligent party directly responsible for all of your medical costs and emotional distress.`,
    ];
    return `${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
  } else {
    const thresholdText = verbalThreshold
      ? "serious injury verbal threshold (permanent impairment or disfigurement)"
      : `monetary medical bill threshold of ${formatUSD(monetaryThreshold)}`;

    const s1 = [
      `${stateName} is a no-fault insurance state.`,
      `Under ${stateName}'s auto insurance system, a no-fault system is enforced.`,
      `In ${stateName}, car accident insurance claims are governed by no-fault rules.`,
      `As a no-fault jurisdiction, ${stateName} requires drivers to carry Personal Injury Protection.`,
    ];
    const s2 = [
      `You are required to file claim expenses through your own Personal Injury Protection (PIP) insurance up to ${formatUSD(pipLimit)}.`,
      `Your own Personal Injury Protection (PIP) policy is responsible for covering initial medical bills and lost wages up to ${formatUSD(pipLimit)}, regardless of fault.`,
      `Regardless of who caused the crash, your first line of recovery is your own PIP policy, which covers expenses up to ${formatUSD(pipLimit)}.`,
      `You must turn to your own insurance provider first to pay for treatment under a PIP policy, which has a coverage cap of ${formatUSD(pipLimit)}.`,
    ];
    const s3 = [
      `You cannot sue the other driver for non-economic pain and suffering unless your injuries meet the state's ${thresholdText}.`,
      `Filing a lawsuit against the at-fault driver for pain and suffering is barred unless your injury meets the state's ${thresholdText}.`,
      `To pursue additional compensation for pain and suffering from the liable party, your injuries must exceed the state's ${thresholdText}.`,
      `A civil claim against the other driver for non-economic damages is permitted only if your case satisfies the state's ${thresholdText}.`,
    ];
    return `${pickOne(s1, rand)} ${pickOne(s2, rand)} ${pickOne(s3, rand)}`;
  }
}

/**
 * 3. Time Limits (Statute of Limitations) Section
 */
export function spinStatute(stateName: string, years: number): string {
  const rand = getSeededRandom(stateName + "_statute");
  const s1 = [
    `In ${stateName}, you have exactly <strong>${years} years</strong> from the date of the motor vehicle accident to file a formal lawsuit in civil court.`,
    `Under ${stateName} law, the statute of limitations for personal injury claims is strictly set at <strong>${years} years</strong> from the crash date.`,
    `${stateName} enforces a strict <strong>${years}-year</strong> deadline to file a civil lawsuit for car accident injuries.`,
    `You have a time limit of exactly <strong>${years} ${years === 1 ? "year" : "years"}</strong> in ${stateName} to initiate a legal lawsuit following a motor vehicle collision.`,
  ];
  const s2 = [
    `If you miss this deadline, your claim will be barred forever.`,
    `Failing to file your lawsuit before this period expires means you lose your right to sue permanently.`,
    `Once this statutory window closes, your claim becomes legally barred and cannot be recovered.`,
    `If the deadline passes without filing, the courts will dismiss your case, leaving you with no recourse.`,
  ];
  return `${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
}

/**
 * 4. Pain and Suffering Caps Section
 */
export function spinDamageCap(
  stateName: string,
  cap: number | null,
  explanation: string | null
): string {
  const rand = getSeededRandom(stateName + "_damagecap");
  if (cap && explanation) {
    return explanation;
  } else {
    const s1 = [
      `There are no statutory limits or caps on pain and suffering (non-economic damages) in ${stateName} for general car accident injuries.`,
      `Under ${stateName} law, pain and suffering damages for typical car crash claims are not capped or limited.`,
      `${stateName} does not impose any legislative limits on non-economic damages in standard motor vehicle accident lawsuits.`,
      `There is no legal cap on the amount of pain and suffering compensation you can recover in ${stateName} for general injury claims.`,
    ];
    const s2 = [
      `Your pain and suffering compensation will be evaluated based on the severity of the injury, recovery time, and impact on your daily life.`,
      `The value of your non-economic claim is calculated based on injury severity, pain levels, and how the accident changed your lifestyle.`,
      `Instead of a cap, your compensation depends on the intensity of your pain, medical treatment duration, and overall disruption to your life.`,
      `Courts and insurers evaluate your pain and suffering payout based on diagnostic severity, rehabilitation length, and impact on daily routines.`,
    ];
    return `${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
  }
}

/**
 * 5. Summary Paragraph Section
 */
export function spinSummary(stateName: string, explanation: string): string {
  const rand = getSeededRandom(stateName + "_summary");
  const s1 = [
    `When negotiating with auto insurance adjusters in ${stateName}, they will verify your medical records, check policy limits, and calculate fault percentage.`,
    `In ${stateName}, auto insurance claims adjusters will review your medical documentation, assess policy maximums, and determine comparative fault.`,
    `Adjusters evaluating a ${stateName} car accident claim will scrutinize all medical receipts, verify insurance policy caps, and establish liability portions.`,
    `The insurance negotiation process in ${stateName} involves a close review of medical treatments, policy limits, and fault allocations.`,
  ];
  const s2 = [
    `Having structured documentations (doctor visits, police reports, proof of lost wages) is essential to maximize your payout.`,
    `To secure the highest settlement, you must present organized evidence including medical reports, accident scene photos, and wage loss statements.`,
    `Compiling clear evidence—such as doctor visit logs, official police reports, and employer wage records—is critical to maximizing your recovery.`,
    `Maximizing your payout requires strong evidence: detailed medical charts, police accident logs, and official records of lost income.`,
  ];
  return `${explanation} ${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
}

/**
 * 6. Consultation CTA Block Text
 */
export function spinConsultation(stateName: string): string {
  const rand = getSeededRandom(stateName + "_consultation");
  const s1 = [
    `Our calculator estimates basic ballpark ranges. An experienced local personal injury attorney in ${stateName} can review your accident records to identify additional sources of recovery (like umbrella policies, underinsured motorist coverage, or product liability).`,
    `While this tool offers a helpful estimation, a qualified ${stateName} injury lawyer can audit your case to uncover additional avenues of compensation, such as uninsured motorist policies or umbrella insurance.`,
    `Calculator values provide general baselines. A local personal injury lawyer in ${stateName} can analyze your medical records and accident facts to find hidden recovery options and maximize policy payouts.`,
    `Use this calculation as a preliminary estimate. Consulting a personal injury lawyer in ${stateName} allows you to evaluate specific coverage terms, like underinsured motorist protection or third-party liability.`,
  ];
  return pickOne(s1, rand);
}

/**
 * 7. FAQ 1: How is a car accident settlement calculated in [state]?
 */
export function spinFAQ1(stateName: string): string {
  const rand = getSeededRandom(stateName + "_faq1");
  const s1 = [
    `In ${stateName}, car accident settlements are calculated by summing your total economic damages (including all medical bills, therapy costs, and lost wages) and adding non-economic damages (pain and suffering).`,
    `Car accident claim values in ${stateName} are determined by adding up all tangible financial losses (such as hospital expenses, doctor visits, and lost income) and factoring in non-economic pain and suffering.`,
    `To compute a settlement in ${stateName}, insurance companies total your economic losses (medical treatment bills, chiropractic care, and lost wages) before adding a valuation for pain and suffering.`,
  ];
  const s2 = [
    `Non-economic damages are usually estimated by multiplying your medical costs by a factor of 1.5x to 5x depending on severity.`,
    `Pain and suffering damages are typically evaluated using a multiplier system, applying a factor from 1.5 to 5 to your total medical costs based on the severity of your injuries.`,
    `Insurers commonly use a multiplier method, applying a factor of 1.5 to 5 times your medical expenses to calculate pain and suffering, depending on injury permanence.`,
  ];
  const s3 = [
    `The final settlement payout is then adjusted based on ${stateName}'s negligence laws, which reduce or bar compensation if you share fault for the crash.`,
    `Your net payout is subsequently adjusted under ${stateName}'s comparative or contributory negligence rules, reducing your recovery if you share responsibility.`,
    `Lastly, ${stateName}'s shared fault rules are applied to the total, docking your final compensation in proportion to your percentage of liability.`,
  ];
  return `${pickOne(s1, rand)} ${pickOne(s2, rand)} ${pickOne(s3, rand)}`;
}

/**
 * 8. FAQ 2: What happens if I am found partially at fault for the accident in [state]?
 */
export function spinFAQ2(stateName: string, rule: string): string {
  const rand = getSeededRandom(stateName + "_faq2");

  if (rule === "contributory") {
    const s = [
      `${stateName} operates under a strict <strong>pure contributory negligence</strong> system. If you share even 1% of the fault for the crash, you are legally barred from recovering any compensation from the other party. You must be completely fault-free to win a claim.`,
      `Because ${stateName} applies a <strong>pure contributory fault</strong> rule, any degree of negligence on your part (even just 1%) completely blocks your right to recover damages. Winning compensation requires proving you were 100% fault-free.`,
      `Under ${stateName}'s strict <strong>contributory negligence</strong> doctrine, sharing any portion of liability—even 1%—prevents you from collecting a settlement. Recovery is only possible if you hold zero blame.`,
    ];
    return pickOne(s, rand);
  }

  if (rule === "modified_50") {
    const s = [
      `${stateName} uses the <strong>50% modified comparative negligence</strong> rule. You can recover damages only if your fault is 49% or less. If you are 50% or more at fault, you get nothing. If you are 20% at fault, your settlement is reduced by 20% (e.g. recovering $8,000 of a $10,000 claim).`,
      `Under the <strong>50% modified comparative negligence</strong> system in ${stateName}, your share of fault must be under 50% (49% or less) to qualify for damages. Being 50% or more liable bars recovery. If you are 10% responsible, your total award is reduced by 10%.`,
      `In ${stateName}, the <strong>50% comparative negligence threshold</strong> means you are barred from recovery if you are 50% or more at fault. For fault under 50%, your settlement is docked proportionally. For instance, being 30% responsible reduces your payout by 30%.`,
    ];
    return pickOne(s, rand);
  }

  if (rule === "modified_51") {
    const s = [
      `${stateName} operates under the <strong>51% modified comparative negligence</strong> rule. You can recover damages as long as you are 50% or less at fault. If your fault is 51% or higher, your claim is barred completely. If you are 25% at fault, your final payout is reduced by 25%.`,
      `In ${stateName}, the <strong>51% modified comparative negligence</strong> standard applies. You remain eligible to recover damages if your fault is 50% or below, but a rating of 51% or higher bars your claim. Sharing 15% of the blame will result in a 15% reduction in your payout.`,
      `Under ${stateName}'s <strong>51% comparative negligence bar</strong>, you can collect a settlement as long as you are not more than 50% responsible. If you are 51% or more to blame, your claim is barred. A 30% liability rating reduces your compensation by exactly 30%.`,
    ];
    return pickOne(s, rand);
  }

  if (rule === "pure") {
    const s = [
      `${stateName} follows a <strong>pure comparative negligence</strong> system. You can recover compensation even if you are 99% responsible for the crash. However, your payout will be reduced by your exact percentage of fault. For example, if you are 70% at fault and your damages are $10,000, you will recover $3,000.`,
      `Under the <strong>pure comparative fault</strong> rule in ${stateName}, you can seek damages even if you were 99% responsible for the accident. Your recovery is docked by your share of blame. If you are 40% at fault and have $20,000 in damages, you will receive $12,000.`,
      `${stateName}'s <strong>pure comparative negligence</strong> law allows you to collect compensation regardless of how much blame you share, even up to 99%. Your total compensation is reduced by your fault share. A driver who is 80% at fault recovers 20% of their total claim.`,
    ];
    return pickOne(s, rand);
  }

  return "";
}

/**
 * 9. FAQ 3: How long do I have to file a lawsuit in [state]?
 */
export function spinFAQ3(stateName: string, years: number): string {
  const rand = getSeededRandom(stateName + "_faq3");
  const s1 = [
    `In ${stateName}, the statute of limitations for personal injury claims resulting from a motor vehicle accident is strictly <strong>${years} ${years === 1 ? "year" : "years"}</strong> from the date of the crash.`,
    `Under ${stateName} statutes, you have a strict filing window of <strong>${years} ${years === 1 ? "year" : "years"}</strong> from the date of the car accident to initiate a formal lawsuit.`,
    `The deadline to file an injury lawsuit in ${stateName} is exactly <strong>${years} ${years === 1 ? "year" : "years"}</strong> following the day of the collision.`,
  ];
  const s2 = [
    `If you do not file a formal lawsuit in civil court before this deadline, you will lose your legal right to seek compensation forever.`,
    `Failing to file your court documents within this ${years}-year period means your claim will be permanently barred and dismissed.`,
    `If you let this statutory period expire without filing a lawsuit, you lose all legal rights to demand a settlement from the responsible party.`,
  ];
  return `${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
}

/**
 * 10. FAQ 4: Does [state] limit or cap pain and suffering damages?
 */
export function spinFAQ4(
  stateName: string,
  cap: number | null,
  explanation: string | null
): string {
  const rand = getSeededRandom(stateName + "_faq4");
  if (cap && explanation) {
    return explanation;
  } else {
    const s = [
      `No. There are no statutory limits or legislative caps on pain and suffering (non-economic damages) in ${stateName} for general car accident injury claims. Payouts are evaluated based on injury severity, pain levels, recovery period, and impact on daily life.`,
      `No, ${stateName} does not cap pain and suffering or other non-economic damages in typical motor vehicle collision cases. Payout values depend on the intensity of your pain, medical recovery duration, and lifestyle disruption.`,
      `There are no legal caps on general pain and suffering compensation in ${stateName} for standard accident cases. Your claim's value will be evaluated on diagnostic severity, rehabilitation length, and impact on daily functions.`,
    ];
    return pickOne(s, rand);
  }
}

/**
 * 11. FAQ 5: How do no-fault PIP rules affect my lawsuit in [state]?
 */
export function spinFAQ5(
  stateName: string,
  pipLimit: number,
  verbalThreshold: boolean,
  monetaryThreshold: number | null
): string {
  const rand = getSeededRandom(stateName + "_faq5");
  const thresholdText = verbalThreshold
    ? "serious injury verbal threshold (permanent impairment or disfigurement)."
    : `statutory monetary threshold of ${formatUSD(monetaryThreshold)}.`;

  const s1 = [
    `Because ${stateName} is a <strong>no-fault</strong> insurance state, you must first file a claim with your own Personal Injury Protection (PIP) policy to cover medical bills up to ${formatUSD(pipLimit)} regardless of who caused the crash.`,
    `As a <strong>no-fault</strong> state, ${stateName} requires you to seek reimbursement for initial medical expenses from your own insurance provider under a PIP policy up to ${formatUSD(pipLimit)}, regardless of liability.`,
    `Under ${stateName}'s <strong>no-fault</strong> rules, your own PIP coverage is responsible for paying medical costs up to ${formatUSD(pipLimit)} first, no matter who was responsible for the accident.`,
  ];
  const s2 = [
    `You are legally barred from filing a lawsuit against the at-fault driver for additional pain and suffering damages unless your injuries are severe enough to exceed the state's threshold. This requires meeting the state's ${thresholdText}`,
    `Filing a personal injury lawsuit against the at-fault driver for non-economic damages is prohibited unless your injury exceeds the state threshold. This requires satisfying the ${thresholdText}`,
    `You cannot sue the liable driver for pain and suffering unless your claim passes the state's legal threshold. This requires meeting the ${thresholdText}`,
  ];
  return `${pickOne(s1, rand)} ${pickOne(s2, rand)}`;
}

/**
 * 12. Educational Section Cards - deterministic spinning
 */
export function spinEducationalCard(
  stateName: string,
  cardNumber: number,
  originalTitle: string,
  originalText: string
): { title: string; text: string } {
  const rand = getSeededRandom(stateName + "_card_" + cardNumber);

  if (cardNumber === 1) {
    const titles = [
      `Negligence Rules in ${stateName}`,
      `${stateName} Shared Fault Standards`,
      `How Liability is Split in ${stateName}`,
    ];
    const texts = [
      `Your compensation is directly impacted by your percentage of fault. In contributory states, even 1% fault bars your recovery entirely. In modified comparative states (like many US jurisdictions), you are barred if your fault exceeds 50% or 51%.`,
      `Insurance settlements and jury awards are reduced by your share of blame. If you are in a contributory negligence state, any fault prevents recovery. In modified comparative systems, being 50% or 51% liable blocks you from obtaining damages.`,
      `Under shared fault laws, your final payout is docked according to your share of responsibility. While pure comparative rules allow recovery at any fault level, modified comparative rules cut off recovery at 50% or 51% fault.`,
    ];
    return { title: pickOne(titles, rand), text: pickOne(texts, rand) };
  }

  if (cardNumber === 2) {
    const titles = [
      `Medical Bills & Diagnostic Proof`,
      `Documenting Medical Treatment`,
      `Clinical Care Baseline`,
    ];
    const texts = [
      `Insurance adjusters use medical bills as the baseline for economic damages. Consistent diagnostic testing, ambulance rides, and hospital records show that your injuries are legitimate, severe, and directly caused by the collision.`,
      `Settlements are calculated starting with your medical expenses. Detailed hospital bills, chiropractic records, and diagnostic scans establish objective proof of the accident's physical toll and link your injuries to the crash.`,
      `Your medical records form the foundation of your insurance claim. Regular doctor visits, diagnostic imaging, and therapy records prevent insurers from arguing that your pain is pre-existing or minor.`,
    ];
    return { title: pickOne(titles, rand), text: pickOne(texts, rand) };
  }

  if (cardNumber === 3) {
    const titles = [
      `Lost Income & Earning Capacity`,
      `Recovering Lost Wages`,
      `Employment Losses`,
    ];
    const texts = [
      `If you missed work to recover, you are entitled to claim past lost wages. If your injuries cause long-term disability that limits your future employment options, the claims should include estimated future lost earning capacity.`,
      `Your claim should account for all income lost while recovering. For severe injuries that result in permanent restrictions, you can also seek compensation for the reduction in your long-term capability to earn a living.`,
      `Missed paychecks and used sick leave are fully recoverable as economic damages. If the collision causes long-term physical limitations, you can claim the future reduction of your earning power.`,
    ];
    return { title: pickOne(titles, rand), text: pickOne(texts, rand) };
  }

  if (cardNumber === 4) {
    const titles = [
      `Understanding Pain & Suffering`,
      `The Pain Multiplier Method`,
      `Non-Economic Valuations`,
    ];
    const texts = [
      `Non-economic damages cover emotional distress, loss of life enjoyment, and physical pain. Typically estimated by multiplying medical expenses by 1.5 (minor injury) to 5.0 (catastrophic permanent injuries) depending on the severity of the case.`,
      `Pain and suffering covers the subjective, human impact of an injury. Adjusters generally estimate this by multiplying your medical costs by a factor of 1.5x to 5x, depending on treatment length and pain levels.`,
      `Your settlement can include compensation for physical discomfort and emotional distress. Insurers calculate this by applying a multiplier (typically 1.5 to 5) to your total medical bills based on injury severity.`,
    ];
    return { title: pickOne(titles, rand), text: pickOne(texts, rand) };
  }

  if (cardNumber === 5) {
    const titles = [
      `Insurance Policy Limits`,
      `At-Fault Liability Policy Caps`,
      `Real-world Policy Bottlenecks`,
    ];
    const texts = [
      `This is a major real-world bottleneck. An insurance company is only legally required to pay up to their policy's liability limits. If the at-fault driver has a minimum state policy, recovering damages beyond that limit is extremely difficult.`,
      `Payouts are practically capped by the at-fault driver's insurance policy limits. Even if your damages are high, recovering beyond the insurer's liability maximum is difficult unless you have underinsured motorist coverage.`,
      `The negligent driver's liability coverage acts as a cap on your claim. If your treatment bills exceed their policy limits (like $15,000 or $25,000 minimums), you must rely on your own insurance or other assets.`,
    ];
    return { title: pickOne(titles, rand), text: pickOne(texts, rand) };
  }

  if (cardNumber === 6) {
    const titles = [
      `PIP & Legal Lawsuit Thresholds`,
      `Understanding No-Fault Rules`,
      `PIP Claims & Tort Thresholds`,
    ];
    const texts = [
      `In no-fault states, you must claim medical costs from your own PIP insurance. You cannot sue the other driver for pain and suffering unless your injuries meet a verbal threshold or your medical bills exceed a state monetary threshold.`,
      `Under no-fault systems, your own PIP coverage pays for your treatments. Filing a lawsuit against the at-fault driver for pain and suffering is barred unless your injury is deemed severe or your bills pass a specific dollar limit.`,
      `In PIP/no-fault states, you turn to your own insurer first. Bringing a lawsuit for pain and suffering against the liable driver is restricted unless your injuries meet the serious verbal threshold or pass the medical bill threshold.`,
    ];
    return { title: pickOne(titles, rand), text: pickOne(texts, rand) };
  }

  return { title: originalTitle, text: originalText };
}
