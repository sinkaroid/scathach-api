export type config = {
  /**
   * Custom Useragent which gets sent
   * @default scathach-api/v{currentVersion}
   */
  useragent?: string;
  /**
   * Your API Keys from the scathach bot
   */
  apikey?: string | undefined;
};
