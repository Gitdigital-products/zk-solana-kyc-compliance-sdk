/**
 * Main SDK Exports
 * @package @solana-zk-kyc/sdk
 */

// Types
export * from './types/index';
export * from './types/identity';
export * from './types/compliance';
export * from './types/blockchain';

// Core Modules
export { IdentityManager, createIdentityManager, createKYCCredential } from './core/identity/manager';
export { createEncryptionUtils, createEncryptionUtilsWithKey, EncryptionUtils } from './core/encryption/crypto';
export { createRiskEngine, RiskEngine } from './core/risk/engine';
export { ZKProofGenerator, MerkleTree, createZKProofGenerator, createMerkleTree } from './core/zk/proofs';

// Blockchain
export { AnchorProgramClient, createAnchorProgramClient } from './blockchain/anchor/program';
export {
  WalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  createWalletAdapter
} from './blockchain/adapters/interface';

// Providers
export {
  KYCProvider,
  PersonaKYCProvider,
  SumSubKYCProvider,
  GoogleIdentityProvider,
  createKYCProvider
} from './providers/kyc/base';
export {
  ComplianceReporter,
  OrganizationInfo,
  createComplianceReporter
} from './providers/compliance/reporter';

// Templates
export {
  TemplateRegistry,
  TemplateUserData,
  createTemplateRegistry
} from './templates/registry';

// Utils
export { translations, getTranslation, getAvailableLanguages } from './utils/i18n';

// Main SDK
export { SolanaZKYCSDK, createSDK, default } from './sdk';
