import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Helmet } from 'react-helmet-async';
const SEO = ({ title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, }) => {
    return (_jsxs(Helmet, { children: [_jsx("title", { children: title }), _jsx("meta", { name: "description", content: description }), keywords && _jsx("meta", { name: "keywords", content: keywords }), ogTitle && _jsx("meta", { property: "og:title", content: ogTitle }), ogDescription && _jsx("meta", { property: "og:description", content: ogDescription }), ogImage && _jsx("meta", { property: "og:image", content: ogImage }), ogUrl && _jsx("meta", { property: "og:url", content: ogUrl }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" })] }));
};
export default SEO;
