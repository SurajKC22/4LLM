import { Document, Schema, model, models } from "mongoose";

// Define the interface for the code analysis document
export interface ICodeAnalysis extends Document {
  title: string; // Title of the uploaded code
  language: string; // Programming language of the code
  filePath: string; // Path to the uploaded file
  analysisResults: {
    errors: string[]; // Array of error messages
    vulnerabilities: string[]; // Array of vulnerability messages
    suggestions: string[]; // Array of suggestions for improvement
    learningResources: string[]; // Array of links to learning resources
  };
  author: {
    _id: string; // User ID of the uploader
    firstName: string; // First name of the user
    lastName: string; // Last name of the user
  };
  createdAt?: Date; // Date when the code was uploaded
  updatedAt?: Date; // Date when the analysis was last updated
}

// Define the schema for the code analysis
const CodeAnalysisSchema = new Schema<ICodeAnalysis>({
  title: { type: String, required: true },
  language: { type: String, required: true },
  filePath: { type: String, required: true },
  analysisResults: {
    errors: { type: [String], default: [] },
    vulnerabilities: { type: [String], default: [] },
    suggestions: { type: [String], default: [] },
    learningResources: { type: [String], default: [] },
  },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create the model or use existing one
const CodeAnalysis = models.CodeAnalysis || model<ICodeAnalysis>('CodeAnalysis', CodeAnalysisSchema);

export default CodeAnalysis;
