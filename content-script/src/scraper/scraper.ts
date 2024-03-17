import axios from 'axios';
import { JSDOM } from 'jsdom';

export async function fetchFromWebOrCache(url: string, ignoreCache = false) {
    // Get the HTMLData from fetching or from cache
    const HTMLData = await axios.get(url).then((res) => res.data);
    const dom = new JSDOM(HTMLData);
    return dom.window.document;
}