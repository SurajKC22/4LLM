// ====== USER PARAMS
declare type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    file: string; // Path or URL to the file
    planId: number;
    creditBalance: number;
  };
  
  declare type UpdateUserParams = {
    firstName: string;
    lastName: string;
    username: string;
    file: string; // Path or URL to the updated file
  };
  
  // ====== CODE ANALYSIS PARAMS
  declare type AddCodeAnalysisParams = {
    code: {
      title: string;
      language: string;
      filePath: string;
      analysisResults: {
        errors: string[];
        vulnerabilities: string[];
        suggestions: string[];
        learningResources: string[];
      };
    };
    userId: string;
    path: string; // Path to where the code file is stored
  };
  
  declare type UpdateCodeAnalysisParams = {
    code: {
      _id: string;
      title: string;
      language: string;
      filePath: string; // Path or URL to the updated code file
      analysisResults: {
        errors: string[];
        vulnerabilities: string[];
        suggestions: string[];
        learningResources: string[];
      };
    };
    userId: string;
    path: string; // Path to where the updated code file is stored
  };
  
  // ====== FILE PARAMS
  declare type AddFileParams = {
    file: {
      title: string;
      fileType: string;
      size: number;
      path: string;
      secureURL: string;
    };
    userId: string;
    storagePath: string; // Path to where the file is stored
  };
  
  declare type UpdateFileParams = {
    file: {
      _id: string;
      title: string;
      fileType: string;
      size: number;
      path: string; // Path to the updated file
      secureURL: string;
    };
    userId: string;
    storagePath: string; // Updated storage path
  };
  
  // ====== TRANSACTION PARAMS
  declare type CheckoutTransactionParams = {
    plan: string;
    credits: number;
    amount: number;
    buyerId: string;
  };
  
  declare type CreateTransactionParams = {
    stripeId: string;
    amount: number;
    credits: number;
    plan: string;
    buyerId: string;
    createdAt: Date;
  };
  
  // ====== CODE ANALYSIS RESULTS
  declare type AnalysisResults = {
    errors: string[];
    vulnerabilities: string[];
    suggestions: string[];
    learningResources: string[];
  };
  
  // ====== TRANSFORMATION CONFIGURATION
  declare type TransformationConfig = {
    restore?: boolean;
    fillBackground?: boolean;
    remove?: {
      prompt: string;
      removeShadow?: boolean;
      multiple?: boolean;
    };
    recolor?: {
      prompt?: string;
      to: string;
      multiple?: boolean;
    };
    removeBackground?: boolean;
  };
  
  // ====== URL QUERY PARAMS
  declare type FormUrlQueryParams = {
    searchParams: string;
    key: string;
    value: string | number | null;
  };
  
  declare type UrlQueryParams = {
    params: string;
    key: string;
    value: string | null;
  };
  
  declare type RemoveUrlQueryParams = {
    searchParams: string;
    keysToRemove: string[];
  };
  
  // ====== TRANSFORMATION PROPS
  declare type TransformationFormProps = {
    action: "Add" | "Update";
    userId: string;
    type: TransformationTypeKey;
    creditBalance: number;
    data?: IFile | null;
    config?: TransformationConfig | null;
  };
  
  declare type TransformedFileProps = {
    file: any;
    type: string;
    title: string;
    transformationConfig: TransformationConfig | null;
    isTransforming: boolean;
    hasDownload?: boolean;
    setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
  };
  