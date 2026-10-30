import ts from 'typescript-eslint';
export default ts.config({ignores:['**/dist/**','**/node_modules/**','**/.next/**','**/next-env.d.ts','test-results/**']},...ts.configs.recommended);
