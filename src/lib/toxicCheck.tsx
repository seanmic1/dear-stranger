
import tf from '@tensorflow/tfjs-node';
import * as toxicity from "@tensorflow-models/toxicity"

const threshhold = 0.9
const toxicityLabels = ["toxicity"]


export default async function toxicCheck(content: string) {

  const model = await toxicity.load(threshhold, toxicityLabels)

  const predictions = await model.classify(content)

  return predictions[0].results[0].match
}
