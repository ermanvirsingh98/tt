import readingTime from 'reading-time';

const extractText = (nodes: any): string => {
    return nodes
        .map((node: any) => {
            if (node.value) return node.value;
            if (node.content) return extractText(node.content);
            return '';
        })
        .join(' ');
};



export const getReadTime = (content: any): any => {

    if (!content || !content.content) return readingTime('');




    const plainText = extractText(content.content);
    return readingTime(plainText);

};